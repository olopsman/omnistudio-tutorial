global with sharing class FlexCardAccountRemoteClass implements vlocity_ins.VlocityOpenInterface {

    global Boolean invokeMethod(String methodName, Map<String,Object> inputMap, Map<String,Object> outMap, Map<String,Object> options) {
        Boolean result = false;
        try {
            // check methodName
            if(methodName == 'getAccountRecords') {
                getAccountRecords(inputMap, outMap);
            result = true;
                }
        } catch(Exception e) {
                system.debug('The error is ' + e.getMessage());
        }
        return result;
    }
 
    private void getAccountRecords(Map<String,Object> inputMap, Map<String,Object> outMap) {
        // cast the object to Id
        Id accountId = (Id) inputMap.get('recordId');
        List<Account> accountList = [SELECT Id, Name, Website, Phone FROM Account WHERE Id =: accountId];
        outMap.put('account', accountList);
    }
}
