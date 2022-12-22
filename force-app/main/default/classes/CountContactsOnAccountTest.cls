@isTest
public class CountContactsOnAccountTest 
{
	 @isTest
    public static void AccountContact() 
    {
        
        List<Account> acc1=new List<Account>();
        Account acc = new Account();
        acc.Name='Thanuja';
        acc.Numof_Contacts__c=0;
        //insert acc;
        acc1.add(acc);  
        insert acc1;
        
        List<contact> newContacts = new List<contact>();
         contact con = new contact();
        con.LastName='Thanuja';
        con.AccountId=acc.Id;
        insert con;
        newContacts.add(con);  
        
        update newContacts;
        
        
        
       /* List<contact> oldContacts = new List<contact>();
        contact con1 = new contact();
        con1.LastName='Thanuja';
        con1.AccountId=acc.Id;
        insert con1;
        oldContacts.add(con1);  
        */
       
//CountContactHandler.CountContactHelper(newContacts,oldContacts);
      
        List<Account> AccountValues = [Select Id,Name,Numof_Contacts__c from Account
        Where Id =: acc1[0].Id];
     
        System.assertEquals(1,AccountValues[0].Numof_Contacts__c);
    }
    
}