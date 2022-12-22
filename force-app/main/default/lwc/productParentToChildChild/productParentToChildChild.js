import { LightningElement } from 'lwc';
import Watch from '@salesforce/resourceUrl/Watch';

export default class ProductParentToChildChild extends LightningElement {
    watchUrl = Watch;

    handleAdd()
    {
        this.dispatchEvent(new CustomEvent('add'));
    }
   
}
