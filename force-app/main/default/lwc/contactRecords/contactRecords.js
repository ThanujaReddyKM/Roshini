import { LightningElement,track } from 'lwc';
import conList from '@salesforce/apex/ContactRecordsLwc.conList';

const columns = [{label:'Account id',fieldName:'AccountId'},
                    {label:'Account Name',fieldName:'Name'},
                    {label:'Phone', fieldName:'Phone'},
                    {label:'Email', fieldName:'Email'},
                    {label:'Type', fieldName:'Type__c'},

];

export default class contactRecords extends LightningElement {

    @track columns1=columns;
    @track data1=[];


    value='';
    get options(){
     return  [
    {label:'5',value:'5'},
    {label:'10',value:'10'},
    {label:'15',value:'15'},
    {label:'20',value:'20'},
    {label:'100',value:'100'},

     ];
    }

    handlechange(event)
    {
        this.value=event.detail.value;
    }

    connectedCallback()
    {
        conList()
            .then(result=>{
                this.data1 = result;
            })

            .catch(error =>{
                console.log("error occured");
            })
        
    }


}