import { LightningElement ,wire} from 'lwc';
import { publish,MessageContext } from 'lightning/messageService';
import COUNTING_UPDATE_CHANNEL from '@salesforce/messageChannel/counting_update__c';
export default class PubLwcNoob extends LightningElement {

    @wire(MessageContext)
    messageContext;
    handleIncrement()
    {
        const payload ={
            operator:'add',
            constant:1
        };
        publish(this.messageContext,COUNTING_UPDATE_CHANNEL,payload);
    }

    handleDecrement()
    {
        const payload ={
            operator:'subtract',
            constant:1
        };
        publish(this.messageContext,COUNTING_UPDATE_CHANNEL,payload);
    }
    handleMultiply()
    {
        const payload ={
            operator:'mul',
            constant:2
        };
        publish(this.messageContext,COUNTING_UPDATE_CHANNEL,payload);
    }
}