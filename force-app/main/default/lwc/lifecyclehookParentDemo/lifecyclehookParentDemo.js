import { LightningElement, api, track } from 'lwc';

export default class LifecyclehookParentDemo extends LightningElement {
    @api car;
    motorbike;
    @track hasRendered = false;

    constructor() {
        super();
        console.log("parent constructor");
        console.log("constructor setting public property");
        this.car = "Mercedes Benz";
    }

    connectedCallback() {
        console.log("parent connectedCallback runs when component is inserted in the DOM")
        console.log("connectedCallback accessing the car property ->", this.car);
        console.log("constructor updating the public property to different value");
        this.car = "BMW";
        console.log(this.template.querySelector('h1'));
    }

    renderedCallback() {
        console.log(JSON.stringify(this.template.querySelectorAll('h1')));
        console.log("parent renderedCallback called after component renders - can happen multiple times");
        // renderedCallback changing a public or wire property will not cause a loopp
        // this.car = "Tesla";
        console.log("track property", this.hasRendered);
        //track operations to run only once
        if (!this.hasRendered) {
            console.log("renderedCallback changing a private or track property will not cause a loop");
            this.motorbike = "BMW R Nine T"
            this.hasRendered = true
        }
    }
}