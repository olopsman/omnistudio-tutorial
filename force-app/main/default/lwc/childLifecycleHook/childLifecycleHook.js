import { LightningElement } from 'lwc';

export default class ChildLifecycleHook extends LightningElement {
    constructor() {
        super()
        console.log("child constructor");
    }

    connectedCallback() {
        console.log("child connectedCallback");     
    }

    renderedCallback() {
        console.log("child renderedCallback - can happen multiple times");
    }
}