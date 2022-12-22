import { LightningElement, wire } from 'lwc';
import { fireEvent,registerListener,unregisterAllListeners } from 'c/pubsub';
import { CurrentPageReference } from 'lightning/navigation';



export default class PublisherComponent extends LightningElement {
  
    message;
    @wire(CurrentPageReference) pageRef;


   

    handlePublisher()
    {
        fireEvent(this.pageRef,"showMessage","Hello welcome to iBirds Software SErvices");
    }

    handleSendDetail()
    {
        const dataArray = this.template.querySelectorAll(".forInput");
        fireEvent(this.pageRef,"sendDetail", dataArray);
    }
//from publisher
    handleSubscribe()
    {
        registerListener("sendMessage",this.handlesendMessage,this)
    }
    handlesendMessage(data)
    {
        this.message=data;
    }

    disconnectedCallback()
    {
        unregisterAllListeners(this);
    }
} 