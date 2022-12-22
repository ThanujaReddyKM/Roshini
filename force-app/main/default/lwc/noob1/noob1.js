import { LightningElement } from 'lwc';

export default class Noob1 extends LightningElement {

    myTitle="Thanuja Reddy";

    handleClick()
    {
        window.alert("Hello Salesforce");
    }


    connectedCallback()
    {
        if(this.myTitle)
        {
            var name='Sorun Kumar Reddy';
            name='sorun'
          
        }
        //window.alert('name=>'+name)
    }
}