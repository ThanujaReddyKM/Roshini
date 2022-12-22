import { LightningElement , api} from 'lwc';

export default class CartChild extends LightningElement {
    @api product;
	

	isAddedToCart;
	quantity;

	@api
	get addedToCart() {
		return this.isAddedToCart;
	}
	set addedToCart(value) {
		this.isAddedToCart = value;
	}

	@api
	get defaultQuantity() {
		return this.quantity;
	}

	set defaultQuantity(value) {
		this.quantity = value;
	}

	handleAddToCart() {
		this.isAddedToCart = true;
		this.dispatchEvent(
			new CustomEvent("addedtocart", {
				detail: {
					productId: this.product.Id,
					selectedQuantity: this.quantity
				}
			})
		);
	}

	handleRemoveFromCart() {
		this.isAddedToCart = false;
		this.dispatchEvent(
			new CustomEvent("removedfromcart", {
				detail: {
					productId: this.product.Id
				}
			})
		);
		this.quantity = 1;
	}

	handleChange(event) {
		this.quantity = event.target.value;
		if(this.isAddedToCart == true){
			
			this.handleAddToCart();

		}
	}

	// get backgroundStyle() {
	// 	return `background-image:url(${this.product.ImageUrl__c})`;
	// }

	// get totalPrice() {
	// 	return this.quantity * this.product.Display_Price__c;
	// }
}