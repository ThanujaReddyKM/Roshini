@isTest
public class AccountTriggerHandlerTest 
{
	@isTest
    private static void copyBillingToShippingInsertTest()
    {
        List<Account> accList = new List<Account>();
        for(integer i=0;i<2;i++)
        {
               Account acc = new Account();
                acc.Name ='Test';
                acc.BillingCity='TestCity';
                acc.BillingCountry ='TestContry';
                acc.BillingState='TestState';
                acc.BillingStreet ='TestStreet';
                acc.BillingPostalCode='TestPostalCode';
                acc.copyBillingToShipping__c =true;
            accList.add(acc);
        }
        
     	Test.startTest();
        insert accList;
        Test.stopTest();
        
        Account updateAcc =[select id, ShippingCity from Account where Id =: accList[0].Id];
        System.assertEquals(accList[0].BillingCity,updateAcc.ShippingCity);
            
    }
    
    @isTest
    private static void copyBillingToShippingUpdateTest()
    {
        List<Account> accList = new List<Account>();
        for(integer i=0;i<2;i++)
        {
               Account acc = new Account();
                acc.Name ='Test';
                acc.BillingCity='TestCity';
                acc.BillingCountry ='TestContry';
                acc.BillingState='TestState';
                acc.BillingStreet ='TestStreet';
                acc.BillingPostalCode='TestPostalCode';
               
            accList.add(acc);
        }
        
     	Test.startTest();
        insert accList;
        for(integer i=0;i<2;i++)
        {
            accList[i].copyBillingToShipping__c =true;
        }
        update accList;
        Test.stopTest();
        
        Account updateAcc =[select id, ShippingCity from Account where Id =: accList[1].Id];
        System.assertEquals(accList[1].BillingCity,updateAcc.ShippingCity);
            
    }
}