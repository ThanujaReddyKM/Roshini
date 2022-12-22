import { LightningElement } from 'lwc';

export default class Noob3ArrowFunction extends LightningElement {

    connectedCallback()
    {
        const callMyFunciton = this.myFunction(10,2);
        //window.alert('callMyFunciton=>'+callMyFunciton)
        window.alert('callMyFunciton by arrow Function=>'+callMyFunciton)

    }

    //Arrow Function
    myFunction=(dividend,divisor)=>{
        return(dividend/divisor);
    }

    // myFunction(dividend,divisor)
    // {
    //     return(dividend/divisor);
    // }
}