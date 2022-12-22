import { LightningElement ,wire,api,track} from 'lwc';
import Curoselmages from '@salesforce/resourceUrl/Curoselmages';
import getProduct from '@salesforce/apex/ProjectHandler.getProduct';
import ONLINESHOPPING_OBJECT from '@salesforce/schema/OnlineShopping__c';
import IMAGE_FIELD from '@salesforce/schema/OnlineShopping__c.Image__c';
import REMAINING_FIELD from '@salesforce/schema/OnlineShopping__c.RemainingProducts__c';
import DESCRIPTION_FIELD from '@salesforce/schema/OnlineShopping__c.Description__c';
import PRICE_FIELD from '@salesforce/schema/OnlineShopping__c.Price__c';
import PRODUCTNAME_FIELD from '@salesforce/schema/OnlineShopping__c.ProductName__c';
import YOURDISCOUNT_FIELD from '@salesforce/schema/OnlineShopping__c.Your_Discount__c';
// import YOURPRICE_FIELD from '@salesforce/schema/OnlineShopping__c.Your_Price__c';
import YOURSPRICE_FIELD from '@salesforce/schema/OnlineShopping__c.Yours_Price__c';
import QUANTITY_FIELD from '@salesforce/schema/Cart__c.Quantity__c';
import addToCard from '@salesforce/apex/ProjectHandler.addToCard';

import CART_OBJECT from '@salesforce/schema/Cart__c';
import Id from '@salesforce/user/Id';
import { getRecord } from 'lightning/uiRecordApi';
import UserNameFld from '@salesforce/schema/User.Name';


// import { getListUi } from 'lightning/uiListApi';
import getCartProduct from '@salesforce/apex/ProjectHandler.getCartProduct';
import { refreshApex } from '@salesforce/apex';
import { updateRecord } from 'lightning/uiRecordApi';

import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import CARTPRICE_FIELD from '@salesforce/schema/Cart__c.TotalPrice__c';
import CARTPRODUCTNAME_FIELD from '@salesforce/schema/Cart__c.ProductName__c';
import CARTQUANTITY_FIELD from '@salesforce/schema/Cart__c.Quantity__c';
import ID_FIELD from '@salesforce/schema/Cart__c.Id';
import { deleteRecord } from 'lightning/uiRecordApi'

import getQuantityProduct from '@salesforce/apex/ProjectHandler.getQuantityProduct';

import getCart from '@salesforce/apex/ProjectHandler.getCart';

const COLS = [
    {
        label: 'Product Name',
        fieldName: 'ProductName__c',
       // editable: true
    },
    {
        label: 'Quantity',
        fieldName:'Quantity__c',
        editable: true
    },
    { label: 'TotalPrice', fieldName:'TotalPrice__c',  },

    // {
    //     type: 'action', typeAttributes: { rowActions: action, menuAlignment: 'auto' }
    //     }
    {
        type: 'button-icon',
        typeAttributes:
        {
          
            iconName: 'utility:delete',
            name: 'delete',
            iconClass: 'slds-icon-text-error'
        }
    },
    
  
];

export default class Curosel extends LightningElement {

   

   columns = COLS;
   @api draftValues = [];

 @api carts;


 recordCartId;
 cartAddDetails =false;

 abcd=false;
    HandleaddToCartProducts(event)
    {
        this.cartAddDetails = true;
        this.abcd=true;
        // this.Details = false;
        this.Details=false;
        console.log('handled clicked')
      return  refreshApex(this.carts);
    }

    backCartHandle()
    {
        this.cartAddDetails = false;
       

    }
   
// //remove
// wiredAccountsResult ;
// error;
//     @wire(getCartProduct)
//     wiredAccounts(result) {
//         this.wiredAccountsResult  = result;
//         if (result.data) {
//             this.carts = result.data;
//             this.error = undefined;
//         } else if (result.error) {
//             this.error = result.error;
//             this.carts = undefined;
//         }
//     }
wiredAccountsResult;
   @wire(getCartProduct) getcarts(data,error)
   {
    if(data)
    {
        console.log('Data=>'+data);
        this.carts= data;
        this.wiredAccountsResult=data;
    }
    else{
        console.log(error)
    }
   }
    


  data = [];
   // carts;

   handleRowAction(event)
   {
    const action = event.detail.action;
    console.log('action='+action)
        const row = event.detail.row;
        console.log('row='+row)
        if (action.name === 'delete') {
            deleteRecord(row.Id)
          
           // console.log('deleteRecord'+deleteRecord)
            .then(() => {
                const row = this.data;
                this.dispatchEvent (
                    new ShowToastEvent({
                        tittle :'Success',
                        message :'Cart Deleted',
                        variant : 'success'
                    })
                );

                return refreshApex (this.carts);
                
            })
            .catch((error)=>{
                this.dispatchEvent (
                    new ShowToastEvent({
                        tittle :'Success',
                        message :'Cart Not Deleted',
                        variant : 'Error'
                    })
                );
            })
        }

      if(this.Count>=1)
      {
        this.Total=this.Total-1;
        return refreshApex (this.Total);
      }
           
         
        
        
   }


    async handleSave(event) {
        // Convert datatable draft values into record objects
        const records = event.detail.draftValues.slice().map((draftValue) => {
            const fields = Object.assign({}, draftValue);
            return { fields };
        });

        // Clear all datatable draft values
        this.draftValues = [];

        try {
            // Update all records in parallel thanks to the UI API
            const recordUpdatePromises = records.map((record) =>
                updateRecord(record)
            );
            await Promise.all(recordUpdatePromises);

            // Report success with a toast
            this.dispatchEvent(
                new ShowToastEvent({
                    title: 'Success',
                    message: 'carts updated',
                    variant: 'success'
                })
            );

            // Display fresh data in the datatable
            await refreshApex(this.carts);
        } catch (error) {
            this.dispatchEvent(
                new ShowToastEvent({
                    title: 'Error updating or reloading carts',
                    message: error.body.message,
                    variant: 'error'
                })
            );
        }
    }


    items=[
        {
            id:"1",
            src: Curoselmages +'/phone.jpg',          
        },
        {
            id:"2",
            src: Curoselmages +'/mackbook.jpg',
           
        },
        {
            id:"3",      
            src: Curoselmages +'/curosel2.jpg',
        },
        {
            id:"4",    
            src: Curoselmages +'/smart.jpg',
        },
    ]
   

    //Fetching Account Details By Using LDS

    products;

    @wire(getProduct) OnlineShopping__c({data,error}){
       if(data)
       {         
              this.products=data;          
       }
       else{
           console.log(error);
       }
    }


    //Fetching cart details 

    cart;

    @wire(getCart) Cart__c({data,error}){
       if(data)
       {         
              this.cart=data;      
              console.log('  this.cart=>' + this.cart)

       }
      
       else{
           console.log(error);
       }
       console.log(data)
    }

    //view
    recordId;
    Details =false;

    objectApi = ONLINESHOPPING_OBJECT;

    imagefield=IMAGE_FIELD;
     descriptionfield = DESCRIPTION_FIELD;
     pricefield = PRICE_FIELD;
     yourdiscount=YOURDISCOUNT_FIELD;
   yoursprice=YOURSPRICE_FIELD;
    remainingProducts=REMAINING_FIELD


   Viewpage(event){
        this.recordId =event.target.dataset.id;
      
        this.Details = true;
        // this.abcd=false;
        this.cartAddDetails = false;
      refreshApex(this.carts);

    }

    backHandle()
    {
        this.Details = false;
      

    }

    //assign values to cart
    Total=0;
       Count=0;
      cartDetails;
      userData={};
    handleChangeNum1(evt) {
        this.Count = evt.target.value;
      }

      HandleAddToCart(event)
    {

        console.log('inside addtocaart');
        console.log('event.target.dataset==>',event.target.dataset.id);
        console.log('event.currentTarget.dataset.id =>', event.currentTarget.dataset.id);
        const id = event.currentTarget.dataset.id;
        console.log('id==>',id);
        this.userData['id'] =id;
        this.userData['Totalcart']=this.Count;
             
            addToCard({parentData : this.userData})
            .then(result=>{
           
                if(result){
                    console.log(result);
                   this.cartDetails=result;
                   this.refreshData=result;
                }
                })
                .catch(error => {
                    console.log('Error:',error);
                })
            
                this.dispatchEvent(
                    new ShowToastEvent({
                        title: 'Success',
                        message: 'Cart Has Been updated',
                        variant: 'success'
                    })
                );

                
                    this.Total=this.Total+1;
                
            

               // return refreshApex (this.Total);

      

    }

    //Current User name
    userId = Id;
currentUserName;

error;
@wire(getRecord, { recordId: Id, fields: [UserNameFld]}) 
userDetails({error, data}) {
    if (data) {
        this.currentUserName = data.fields.Name.value;
       
    } else if (error) {
        this.error = error ;
    }
    
}   
 }