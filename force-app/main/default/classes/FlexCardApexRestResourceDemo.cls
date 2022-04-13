@RestResource(urlMapping='/flexCard/*')
global with sharing class FlexCardApexRestResourceDemo {
    @HttpGet
    global static Contact getAccountsContact() {
        RestRequest req = RestContext.request;
        RestResponse res = RestContext.response;
        //get the recordId
        String accountId = req.requestURI.substring(req.requestURI.lastIndexOf('/') + 1);
        // initialize empty
        Contact contactList = new List<Contact>();
        // can check if valid id
        if(accountId InstanceOf Id) {
            contactList = [Select Id, FirstName, LastName, Email, Phone from Contact where AccountId =: accountId];
        }
        return contactList;
    }
}
