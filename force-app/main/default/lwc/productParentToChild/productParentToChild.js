import { LightningElement ,api} from 'lwc';

export default class ProductParentToChild extends LightningElement {
    value = [];
    // get options() {
    //     return [
    //         { label: 'Watch', value: 'option1' },
    //         { label: 'Mobile', value: 'option2' },
    //         { label: 'Bag', value: 'option3' },
    //     ];
    // }


    //try
    data =[
        {
            "Watch": {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"},
            "Phone": {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"},
            "Bag": {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"},
            "thanu": {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"}
          
        }        
            ]

            get options()
            {
                var countryArray = [];
                for(let key in this.data[0])
                {
                    //JSON form
                  var country ={label:key,value:key}
                  console.log('country=>'+country)
                   countryArray.push(country);
                }
                return countryArray;
            }
    
    //     states=[];
    //    // country;
    //     handleChange(event)
    //         {
    //             this.states = [];
    //             country = event.target.value;
    //             // console.log(value);
    //             for(let key in this.data[0][country][0])
    //             {
    //                 var state={label:key,value:key}
    //                 this.states.push(state);
    //             }
    //             //console.log(states);
    //         }

    // handleChange(event) {
    //     this.value = event.target.value;
    // }

    countValue=0;
    handleadd()
    {
        this.countValue++;
    }
}