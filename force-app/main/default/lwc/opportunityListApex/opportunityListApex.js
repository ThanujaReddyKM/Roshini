import { LightningElement } from 'lwc';
import opportunityList from '@salesforce/apex/ContactControllerLWC.opportunityList';
export default class OpportunityListApex extends LightningElement {


    oportunitiesData;

    handleGetOpportunity()
    {
        opportunityList().then(result=>{
            console.log("&&");
            console.log(result);
            this.oportunitiesData=result;
        })
        .catch(error =>{
            console.log("$$");
            alert(JSON.stringify(error));
            console.log(error);
        })
    }
}