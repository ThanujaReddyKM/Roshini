import { LightningElement ,api} from 'lwc';
import {FlowNavigationNextEvent} from 'lightning/flowSupport';

export default class LwcToFlow extends LightningElement {

  @api  firstname;
   @api lastname;
  @api  email;

    handleFirstName(event) {
        this.firstname = event.detail.value;
    }

    
    handleLastName(event) {
        this.lastname = event.detail.value;
    }
    handleEmail(event) {
        this.email = event.detail.value;
    }



    //trying

// @api  FirstName;
// @api LastName;
// @api  Email;

//   userData = {};
//   userData1(event)
//   {
//     this.userData[event.target.label] = event.target.value;
//   }
}