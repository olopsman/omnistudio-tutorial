import { LightningElement } from 'lwc';

export default class LifecycleHookConstructor extends LightningElement {
    constructor() {
        super();
        console.log("constructor initiated");
    }
}