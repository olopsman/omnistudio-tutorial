import { LightningElement } from 'lwc';
import { OmniscriptBaseMixin } from 'vlocity_ins/omniscriptBaseMixin'


export default class OmniApplyCallRespDemo extends OmniscriptBaseMixin(LightningElement) {
    // data object with a nested person object
    data = {
        person: {
            name: "Paulo",
            lastName: "Orquillo",
            role: "Salesforce Developer"
        }
    }
    connectedCallback() {
        this.omniApplyCallResp(this.data);
    }
}