import { LightningElement } from 'lwc';

export default class PaymentDetails extends LightningElement {
    get  monthOptions()
    { 
        return[
            {label:"1",value : "1"},
            {label:"2",value:"2"},
            {label:"3",value:"3"},
            {label:"4",value:"4"},
            {label:"5",value:"5"},
            {label:"6",value:"6"},
            {label:"7",value:"7"},
            {label:"8",value:"8"},
            {label:"9",value:"9"},
            {label:"10",value:"10"},
            {label:"11",value:"11"},
            {label:"12",value:"12"},
            
        ]
    }
    months;
handleMonth(event)
    {
        this.months = event.target.value; 
    }

    get yearOptions()
    {
        return[
            {label:"2023",value : "2023"},
            {label:"2024",value : "2024"},
            {label:"2025",value : "2025"},
            {label:"2026",value : "2026"},
            {label:"2027",value : "2027"},
            {label:"2028",value : "2028"},
            {label:"2029",value : "2029"},
            {label:"2030",value : "2030"},
            {label:"2031",value : "2031"},
            {label:"2032",value : "2032"},
            {label:"2033",value : "2033"},
            {label:"2034",value : "2034"},
            {label:"2035",value : "2035"},
        
        ]
    }
   years;
   handleYear(event)
    {
        this.years = event.target.value; 
    }


    selection;

    handleCheckboxChange() {
        // Query the DOM
        const checked = Array.from(
            this.template.querySelectorAll('lightning-input')
        )
            // Filter down to checked items
            .filter((element) => element.checked)
            // Map checked items to their labels
            .map((element) => element.label);
        this.selection = checked.join(', ');
    }

    handleSubscribe(event) {
        this.template
            .querySelectorAll('[data-element="subscribe-checkbox"]')
            .forEach((element) => {
                element.checked = true;
            });
    }


    textvalue = 'initial value';
    handleChange(event) {
        this.textvalue = event.detail.value;
    }
    handleClick(event) {
        let input = this.template.querySelector('lightning-input');
        let end = input.value.length;
        input.selectionStart = 0;
        input.selectionEnd = end;
        // Optionally, focus to highlight the selected characters
        // input.focus();
    }

}