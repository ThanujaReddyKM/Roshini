public class ContactRecordsLwc
{
	@AuraEnabled
    public static List<Contact> conList()
    {
       List<Contact> cont= [select AccountId, Type__c, Email,Phone,Name from Contact limit 10];
        return cont;
    }
    
      
}