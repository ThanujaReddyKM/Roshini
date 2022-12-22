import { LightningElement } from 'lwc';

export default class ProductDetailsParent extends LightningElement {

    watch;
    bag;
    phone;
    mac;
    bottle;
    // template=false;
   // areDetailsVisible=false;

    
    onclickHandler(event)
    {
        const label = event.target.label;
       //  this.areDetailsVisible=event.target.checked;
       // if(areDetailsVisible)
      //  {
            console.log('label==>',label);

            if(label == 'Watch')
            {
                this.watch = true;
                this.bag = false;
                this.phone=false;
                this.mac=false;
                this.bottle=false;
    
                console.log('inside if');
                console.log('watch==>',this.watch);
                console.log('bag==>',this.bag);
    
                this.template.querySelector('c-product-details-child').parentData(label);
            }
            else if(label == 'Bag')
            {
                this.watch = false;
                this.bag = true;
                this.phone=false;
                this.mac=false;
                this.bottle=false;
                console.log('inside else if');
                console.log('watch==>',this.watch);
                console.log('bag==>',this.bag);
    
                this.template.querySelector('c-product-details-child').parentData(label);
            }
            else if(label == 'Phone')
            {
                this.watch = false;
                this.bag = false;
                this.phone=true;
                this.mac=false;
                this.bottle=false;
                console.log('inside else if');
                // console.log('watch==>',this.watch);
                // console.log('shoes==>',this.shoes);
    
                this.template.querySelector('c-product-details-child').parentData(label);
            }
            else if(label == 'MacBook')
            {
                this.watch = false;
                this.bag = false;
                this.phone=false;
                this.mac=true;
                this.bottle=false;
                console.log('inside else if');
              
    
                this.template.querySelector('c-product-details-child').parentData(label);
            }
            else if(label == 'Bottle')
            {
                this.watch = false;
                this.bag = false;
                this.phone=false;
                this.mac=false;
                this.bottle=true;
                console.log('inside else if');
             
    
                this.template.querySelector('c-product-details-child').parentData(label);
            }
        }

    countvalue=0;
    handleadd(event)
    {
        
       this.countvalue=event.detail;
    }

    countbag=0;
    handleBag(event)
    {
        this.countbag=event.detail;
    }
    countphone=0;
    handlePhone(event)
    {
        this.countphone=event.detail;
    }
    countmac=0;
    handleMacBook(event)
    {
        this.countmac=event.detail;
    }
    countbottle=0;
    handleBottle(event)
    {
        this.countbottle=event.detail;
    }

}
