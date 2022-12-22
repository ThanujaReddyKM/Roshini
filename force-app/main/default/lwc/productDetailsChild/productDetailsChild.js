import { LightningElement,api } from 'lwc';
import product from '@salesforce/resourceUrl/product';

export default class ProductDetailsChild extends LightningElement {

    data; 
    brand;
    image;
    costprice;
    discount;
    discountTemp;
    sellingprice;

    description;

   
    @api parentData(data)
    {
        this.data = data;
        console.log('data==>',data)

        if(data == 'Watch')
        {
            this.image = product +'/watch.jfif';
            this.brand='fastTrack';
            this.costprice = 3900;
            this.discount= 6
            this.discountTemp = '6%'
            this.sellingprice=(this.costprice-(this.costprice*this.discount/100))
            this.description='Fastrack is an Indian fashion accessory retail brand, launched in 1998 as a sub-brand of Titan Watches. In 2005, Fastrack was spun off as an independent brand targeting the urban youth and growing fashion industry in India.'

        }
        else if(data == 'Bag')
        {
            this.image = product +'/bag.jfif';
          
            this.costprice = 2900;
            this.discount= 18;
            this.discountTemp = '18%'
            this.sellingprice=(this.costprice-(this.costprice*this.discount/100))
            this.brand='WildCraft';
          
            this.description='Wildcraft bags are famous for their quality and durability. Also, most of them are highly spacious, so you can fit a lot of things in them. These Wildcraft bags are also designed in a way that makes them look elegant and contemporary.'

        }
        else if(data == 'Phone')
        {
            this.image = product +'/iphone1.jpg';
            this.brand='iPhone';
          
            this.costprice = 190000;
            this.discount= 12
            this.discountTemp = '12%'
            this.sellingprice=(this.costprice-(this.costprice*this.discount/100))
           
            this.description='One of the Top most Brand in india'

        }
        else if(data == 'MacBook')
        {
            this.image = product +'/mackbook.jpg';

            this.brand='Apple Mac Book'
            this.costprice = 290000;
            this.discount=15
            this.discountTemp = '15%'
            this.sellingprice=(this.costprice-(this.costprice*this.discount/100))
            this.description='The MacBook is a brand of Mac notebook computers designed and marketed by Apple Inc. that use Apples macOS operating system since 2006. It replaced the PowerBook and iBook brands during the Mac transition to Intel processors, announced in 2005.'

        }
        else if(data == 'Bottle')
        {
            this.image = product +'/bottle.jpg';
            
            this.brand='TupperWare'
            this.costprice = 800;
            this.discount=8
            this.discountTemp = '8%'
            this.sellingprice=(this.costprice-(this.costprice*this.discount/100))
            this.description='We all know how important drinking water is for one’s health. Our bodies’ largest component is water which means you should drink enough daily to maintain your bodily functions. Without enough water, we risk compromising on our health.'

        }


    }

    countwatch=0;
    countbag=0;
    countphone=0;
    countmac=0;
    countbottle=0;
    tottal=0;
    onclickHandler()
    {
       
     // console.log('Tottal'+this.tottal)
        if(this.data=='Watch')
        {
            console.log('costprice'+this.sellingprice)
           this.countwatch++;
            const selectedEvent = new CustomEvent('selected', { detail:this.countwatch });

        this.dispatchEvent(selectedEvent);   
        console.log('total'+(this.sellingprice*this.countwatch)) 
        const watch =this.sellingprice*this.countwatch;
        console.log('Watch'+watch)
        this.tottal=watch;
        console.log('Tottalwatch'+this.tottal)
        //this.tottal = this.sellingprice*this.countwatch

         }
         else if(this.data=='Bag')
         {
            console.log('costprice'+this.sellingprice)
            this.countbag++;
            const selectedEvent = new CustomEvent('selectedbag', { detail:this.countbag });

            this.dispatchEvent(selectedEvent);     
            console.log('total'+(this.sellingprice*this.countbag)) 

            const bag =this.sellingprice*this.countbag;
            console.log('Bag'+bag)
            this.tottal=this.tottal +bag;
            console.log('watchbagl'+this.tottal)
           // this.tottal = this.sellingprice*this.countwatch
         }
         else if(this.data=='Phone')
         {
            console.log('costprice'+this.sellingprice)
            this.countphone++;
            const selectedEvent = new CustomEvent('selectedphone', { detail:  this.countphone });
            this.dispatchEvent(selectedEvent);     
            console.log('total'+(this.sellingprice*this.countphone)) 
            const phone =this.sellingprice*this.countphone;
            console.log('phone'+phone)
            this.tottal=this.tottal +phone;
            console.log('watchbagl'+this.tottal)
         }
         else if(this.data=='MacBook')
         {
            console.log('costprice'+this.sellingprice)
            this.countmac++;
            const selectedEvent = new CustomEvent('selectedmacbook', { detail:  this.countmac });
            this.dispatchEvent(selectedEvent);    
            console.log('total'+(this.sellingprice*this.countmac))  
            const mac =this.sellingprice*this.countmac;
            console.log('phone'+mac)
            this.tottal=this.tottal +mac;
            console.log('watchbagl'+this.tottal)
         }
         else if(this.data=='Bottle')
         {
            console.log('costprice'+this.sellingprice)
            this.countbottle++;
            const selectedEvent = new CustomEvent('selectedbottle', { detail:  this.countbottle });
            this.dispatchEvent(selectedEvent);     
            console.log('total'+(this.sellingprice*this.countbottle)) 
            const bottle =this.sellingprice*this.countbottle;
            console.log('phone'+bottle)
            this.tottal=this.tottal +bottle;
            console.log('watchbagl'+this.tottal)
         }
}

}