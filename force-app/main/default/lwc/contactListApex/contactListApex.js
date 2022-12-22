import { LightningElement, wire } from 'lwc';
import getContactList from '@salesforce/apex/ContactControllerLWC.getContactList';

export default class ContactListApex extends LightningElement {

    //wire as property
@wire(getContactList) contactList;


}