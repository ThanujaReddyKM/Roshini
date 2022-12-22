import { LightningElement, wire } from 'lwc';
import accountList from '@salesforce/apex/ContactControllerLWC.accountList';

export default class AccountListApex extends LightningElement {

    accountList
    //as a Function
    @wire(accountList) getAccountList(data,error)
    {
        if(data)
        {
            console.log("@@");
            console.log(data);
            this.accountList=data;
        }
        else{
            console.log("##");
            console.log(error);
        }
    }

}