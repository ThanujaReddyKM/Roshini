import { LightningElement ,api,track,wire} from 'lwc';
import getSelectedProducts from "@salesforce/apex/ProductService.getSelectedProducts";

import {
	subscribe,
	unsubscribe,
	MessageContext,
	publish
} from "lightning/messageService";
import CART_CHANNEL from "@salesforce/messageChannel/productSelectedChannel__c";

export default class CartParent extends LightningElement {
   
    subscription = null;
	receivedMessage;

    @track productList;

    @track addCartMap = {};
	@track productWrap;
  
	@track cartTitle ='Cart Details (0)';

    @wire(MessageContext)
	messageContext;

    connectedCallback() {
		this.subscribeMC();
    }

    disconnectedCallback() {
		this.unsubscribeMC();
	}

    subscribeMC() {
		if (this.subscription) {
			return;
		}
		this.subscription = subscribe(
			this.messageContext,
			CART_CHANNEL,
			(message) => {
				console.log("message " + JSON.stringify(message));
				this.addCartMap = message.selectedData;
				this.findSelectedProducts();
			}
		);
	}

	unsubscribeMC() {
		unsubscribe(this.subscription);
		this.subscription = null;
	}

    findSelectedProducts() {
        
        getSelectedProducts({productIdMap: this.addCartMap})
            .then((result) => {
                this.productWrap = result;
                this.productList = result.productLineList;
				this.cartTitle = 'Cart Details ('+result.count+')';
				if(result.count <1){
					this.productList = null;
				}
            })
            .catch((error) => {
            });
    }


}







// @api products;
    // handleAddToCart(event) {
    //     this.isAddedToCart = true;
    //     this.dispatchEvent(
    //         new CustomEvent("addedtocart", {
    //             detail: {
    //                 productId: event.detail.productId,
    //                 selectedQuantity: event.detail.selectedQuantity
    //             }
    //         })
    //     );
    // }
 
    // handleRemovedFromCart(event){
    //     this.dispatchEvent(
    //         new CustomEvent("removedfromcart", {
    //             detail: {
    //                 productId: event.detail.productId
    //             }
    //         })
    //     );
         
    // }