import { LightningElement } from 'lwc';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';

export default class Noob2ShowToastEvent extends LightningElement {

    myTitle='SalesForce Noob';

    handleClick()
    {
        this.ShowToast(this.myTitle);
    }

    ShowToast(firstFunctionArgument)
    {
        const event = new ShowToastEvent({
           title:firstFunctionArgument,
           // title:'Shomow Toast De',
            message:'Want to display toast example',
            //variant:'success'
            variant:'error'
        })
        this.dispatchEvent(event);
    }

}