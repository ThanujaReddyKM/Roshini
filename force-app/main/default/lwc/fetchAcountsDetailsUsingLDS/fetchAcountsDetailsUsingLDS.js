import { LightningElement, wire } from 'lwc';
import {getRecord} from 'lightning/uiRecordApi'

export default class FetchAcountsDetailsUsingLDS extends LightningElement {

    account={};

 @wire(getRecord,{
    recordId:'0015g000012R7AQAA0',
    fields:['Account.Name','Account.AccountNumber','Account.Phone']//,//'Account.Email']
 })
 thanuja({data,error}){
    if(data)
    {
        this.account ={
            name : data.fields.Name.value,
            accountNumber: data.fields.AccountNumber.value,
            phone:data.fields.Phone.value,
           // email:data.fields.Email.value,
           
        };
    }
    else{
        console.log(error);
    }
 }


    // account={};
    // @wire(getRecord, {
    //     recordId :'0015g000012R7AQAA0',
    //     fields : ['Account.Name','Account.AccountNumber','Account.Phone',
    // 'Account.Rating']
    // })accountDetail({data,error}){
    //     if(data)
    //     {
    //         console.log(data);
    //         this.account={
    //             name : data.fields.Name.value,
    //             accountNumber : data.fields.AccountNumber.value,
    //             phone : data.fields.Phone.value,
    //             rating : data.fields.Rating.value
    //         };
    //     }
    //     else{
    //         console.log(error);
    //     }
    // }
}