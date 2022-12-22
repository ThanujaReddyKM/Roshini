import { api, LightningElement } from 'lwc';
import sendTemplateMessage from '@salesforce/apex/WhatsappIntegrationController.sendTemplateMessage';



export default class WhatsappIntegration extends LightningElement {

    @api recordId;

    onSendMessageTemplate()
    {

    }
}