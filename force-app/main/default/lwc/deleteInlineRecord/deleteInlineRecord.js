import { LightningElement,wire } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { refreshApex } from '@salesforce/apex';
import { deleteRecord } from 'lightning/uiRecordApi';
//import getCartProduct from '@salesforce/apex/ProjectHandler.getCartProduct';
import getCartProduct from '@salesforce/apex/ProjectHandler.getCartProduct';


export default class DeleteInlineRecord extends LightningElement {
    accounts;
    error;

    /** Wired Apex result so it can be refreshed programmatically */
    wiredAccountsResult;

    @wire(getCartProduct)
    wiredAccounts(result) {
        this.wiredAccountsResult = result;
        if (result.data) {
            this.accounts = result.data;
            this.error = undefined;
            console.log('result=>'+result)
        } else if (result.error) {
            this.error = result.error;
            this.accounts = undefined;
        }
    }

    deleteAccount(event) {
        const recordId = event.target.dataset.recordid;
        deleteRecord(recordId)
            .then(() => {
                this.dispatchEvent(
                    new ShowToastEvent({
                        title: 'Success',
                        message: 'Account deleted',
                        variant: 'success'
                    })
                );
                return refreshApex(this.wiredAccountsResult);
            })
            .catch((error) => {
                this.dispatchEvent(
                    new ShowToastEvent({
                        title: 'Error deleting record',
                        message: reduceErrors(error).join(', '),
                        variant: 'error'
                    })
                );
            });
    }
}