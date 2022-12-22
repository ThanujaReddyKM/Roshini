import { LightningElement,wire } from 'lwc';
import { getListUi } from 'lightning/uiListApi';

export default class FetchAccountDetailsUsingLds extends LightningElement {

    accountList;

    @wire(getListUi,{
        objectApiName:'Account',
        listViewApiName:'AllAccounts'
    })
    thanuja({data,error}){
        if(data){
            this.accountList = data.records.records;
        }
        else{
            console.log(error);
        }
    }

//way 1
    // @wire (getListUi,
    //     {
    //     objectApiName:'Account',
    //     listViewApiName: 'AllAccounts'
    // }) allAccounts({data,error}){
    //     if(data){
    //         console.log(data);
    //         this.accountList = data.records.records;
    //     }
    //     else{
    //         console.log(error);
    //     }
    // }

   
    //Way 2
    // @wire (getListUi,
    //     {
    //    listViewId:'00B5g00000iqLYCEA2'
    // }) allAccounts({data,error}){
    //     if(data){
    //         console.log(data);
    //         this.accountList = data.records.records;
    //     }
    //     else{
    //         console.log(error);
    //     }
    // }



}
