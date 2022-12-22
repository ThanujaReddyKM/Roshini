import { LightningElement } from 'lwc';
import searchAccount from '@salesforce/apex/ContactControllerLWC.searchAccount';

export default class SearchAccountApex extends LightningElement {

    accountList;
    error;
    
    hadleSearch()
    {
       var dataArray= this.template.querySelectorAll(".forInput");
       const data={
        Name:dataArray[0].value,
        Phone:dataArray[1].value
       }
       searchAccount({account:data}).then(response => {
        this.accountList = response;
    })
    .catch(error=>{
        this.error=error;
    })

    }
   
}