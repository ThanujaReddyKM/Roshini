import { LightningElement, wire } from 'lwc';
import { createRecord } from 'lightning/uiRecordApi';


export default class CreateContactUsingLDS extends LightningElement {

  
    handleSave()
    {
        const thanu=this.template.querySelectorAll(".forInput");

        const fields = {
            FirstName : thanu[0].value,
            LastName : thanu[1].value,
            Phone : thanu[2].value,
            Email : thanu[3].value,
            AccountId :'0015g000012Nm1wAAC'
        }
        console.log(fields);

        createRecord({apiName:'Contact',fields}).then(amma=>{
            console.log(amma);
        }).catch(error=>{
            console.log(error);
        })

    }

    // handleSave()
    // {
    //     const contactData = this.template.querySelectorAll(".forInput");
    //     const fields = {
    //         FirstName :contactData[0].value,
    //         LastName : contactData[1].value,
    //         Phone:contactData[2].value,
    //         Email:contactData[3].value,
    //         AccountId :'0015g000012R7AQAA0'
    //     }
    //     console.log(fields);

    //     createRecord({apiName:'Contact',fields}).then(record=>{
    //         console.log(record);
    //     }).catch(error=>{
    //         console.log(error);
    //     })
    //     }
          
    }
