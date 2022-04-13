import { LightningElement } from 'lwc';
import { OmniscriptBaseMixin } from 'vlocity_ins/omniscriptBaseMixin'

const columns = [
    { label: 'AccountName', fieldName: 'AccountName' },
    { label: 'Stage', fieldName: 'Stage' },
    { label: 'ClosedDate', fieldName: 'ClosedDate', type: 'date' },
    { label: 'Amount', fieldName: 'Amount', type: 'currency' }
]; 

export default class OmnistudioSampleComponent extends OmniscriptBaseMixin(LightningElement) {

    tableData = [];
    columns = columns;

    connectedCallback() {
		const jsonData = JSON.parse(JSON.stringify(this.omniJsonData));
        this.tableData = jsonData.oppData;
	}

}