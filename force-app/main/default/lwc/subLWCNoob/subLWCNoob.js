import { LightningElement, wire } from 'lwc';
import { subscribe,MessageContext } from 'lightning/messageService';
import COUNTING_UPDATE_CHANNEL from '@salesforce/messageChannel/counting_update__c';

export default class SubLWCNoob extends LightningElement {
    counter=0;
    subscription=null;
    @wire(MessageContext)
    messageContext;
    connectedCallback()
    {
        this.subscribeToMessageChannel();
    }
    subscribeToMessageChannel()
    {
        this.subscription=subscribe(
            this.messageContext,
            COUNTING_UPDATE_CHANNEL,
            (message) => this.handleMessage(message)
        );
    }

    handleMessage(message){
      //  alert("message:" +JSON.stringify(message));

       if(message.operator=='add')
       {
        this.counter += message.constant;
       }
      else if(message.operator=='subtract')
       {
        this.counter -= message.constant;
       }
       else if(message.operator=='mul')
       {
        this.counter *= message.constant;
       }
    }
}