import { LightningElement, wire } from 'lwc';
import { registerListener,unregisterAllListeners,fireEvent} from 'c/pubsub';
 import {CurrentPageReference} from 'lightning/navigation';


export default class SubscriberComponent extends LightningElement {

     @wire(CurrentPageReference) pageRef;
     message;
     userDetail={};

    connectedCallback()
    {
        registerListener("showMessage",this.handleShowMessage,this);
        registerListener("sendDetail", this.handleUserDetail,this);
    }

    handleShowMessage(data)
    {
        this.message= data;
    }

    handleUserDetail(data)
    {
        this.userDetail ={
            username :data[0].value,
            email:data[1].value
        }
    }

    handleSendToPublisher()
    {
        fireEvent(this.pageRef,"sendMessage", "Message from subscriber component");
    }

    disconnectedCallback()
    {
        unregisterAllListeners(this);
    }


}