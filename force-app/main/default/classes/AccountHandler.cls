public class AccountHandler
{
	//scenario 1
    	public static void prePopulating(List<Account> accList)
        {
            for(Account accIterator:accList)
            {
                if(accIterator.ShippingCity==null && accIterator.ShippingCountry==null 
                  && accIterator.ShippingPostalCode==null && accIterator.ShippingState==null && accIterator.ShippingStreet==null)
                {
                    System.debug('inside if');
                     accIterator.ShippingCity=accIterator.BillingCity;
                    accIterator.ShippingCountry=accIterator.BillingCountry;
                    accIterator.ShippingPostalCode=accIterator.BillingPostalCode;
                    accIterator.ShippingState=accIterator.BillingState;
                    accIterator.ShippingStreet=accIterator.BillingStreet;
                }
              
            }
        }
    //scenario 2
    public static void lessThanRevenue(List<Account> accList)
    {
        for(Account prePopulate :accList)
        {
            if(prePopulate.AnnualRevenue <=1000)
            {
                prePopulate.AnnualRevenue.addError('Annual Revenue should be greate than 1000');
            }
        }
    }
    //scenario 3
    public static void contactNameAsAccount(List<Account> accList)
    {
        List<Contact> conList = new List<Contact>();
        for(Account contactToAccount :accList)
        {
            contact con = new contact();
           
            con.LastName=contactToAccount.Name;
             con.AccountId=contactToAccount.id;
            conList.add(con);
        }
        if(conList.size()>0)
        {
            insert conList;
        }
    }
    
    //scenario 4
    public static void cannotChangeAccountName(List<Account> accList,Map<Id,Account> oldAccountValues)
    {
        /*
        //one method
        for(Account cannotChange :accList)
        {
            if(cannotChange.Name != null)
            {
                cannotChange.Name.addError('Account name cannot be changed');
            }
        }
*/
        //another
         for(Account cannotChange :accList)
         {
             Account accRecOld = oldAccountValues.get(cannotChange.Id);
             if(cannotChange.Name != accRecOld.Name)
             {
                 cannotChange.Name.addError('Account name cannot be changed Roshini');
             }
         }
    }
    
    public static void changeMailingAddress(List<Account> accList,Map<Id,Account> oldAccountValues)
    {
        set<id> accIdsWhicGotMAilingAddressChanged = new set<id>();
        for(Account accValues :accList)
        {
            Account accRecOld = oldAccountValues.get(accValues.Id);
            if((accValues.BillingStreet != accRecOld.BillingStreet))
            {
                accIdsWhicGotMAilingAddressChanged.add(accValues.Id);
            }
        }
        
        List<Account> accsWithContacts = [select id, name,billingcity,billingstreet,billingcountry,billingstate,billingpostalcode,
                                         (select id,LastName from contacts) from Account where id In : accIdsWhicGotMAilingAddressChanged];
        List<contact> contsListToUpdate = new list<contact>();
        
        for(Account acc : accsWithContacts)
        {
            List<Contact> consOfTheLoopedAccount = acc.contacts;
            for(contact con:consOfTheLoopedAccount)
            {
                con.MailingCity= acc.BillingCity;
                con.MailingCountry=acc.BillingCountry;
                con.MailingState=acc.BillingState;
                con.MailingPostalCode=acc.BillingPostalCode;
                con.MailingStreet=acc.BillingStreet;
                con.Phone=acc.Phone;
                contsListToUpdate.add(con);
            }
        }
        if(contsListToUpdate.size()>0)
        {
            update contsListToUpdate;
        }
        
    }
    
    public static void cannotDeleteActiveStatue(List<Account> accList)
    {
        for(Account cannotDelete:accList)
        {
            if(cannotDelete.Active__c=='Yes')
            {
                cannotDelete.addError('Cannot delete active Account Thanuja');
            }
        }
    }
    
    public static void emailToDeletedAccount(List<Account> accList)
    {
        List<Messaging.SingleEmailMessage> emailObjs = new  List<Messaging.SingleEmailMessage>();
        for(Account accOld:accList)
        {
            Messaging.SingleEmailMessage emailObj = new Messaging.SingleEmailMessage();
            List<String> emailAddress = new List<String>();
            emailAddress.add(userinfo.getUserEmail());
            emailObj.setToAddresses(emailAddress);
            emailObj.setSubject('Account has been successfully deleted' +accOld.Name);
            emailObj.setPlainTextBody('Account has been deleted');
            emailObjs.add(emailObj);
        }
        Messaging.sendEmail(emailObjs);
    }
    
     public static void emailToRestoreAccount(List<Account> accList)
    {
        List<Messaging.SingleEmailMessage> emailObjs = new  List<Messaging.SingleEmailMessage>();
        for(Account accOld:accList)
        {
            Messaging.SingleEmailMessage emailObj = new Messaging.SingleEmailMessage();
            List<String> emailAddress = new List<String>();
            emailAddress.add(userinfo.getUserEmail());
            emailObj.setToAddresses(emailAddress);
            emailObj.setSubject('Account has been successfully Restored' +accOld.Name);
            emailObj.setPlainTextBody('Account has been restored');
            emailObjs.add(emailObj);
        }
        Messaging.sendEmail(emailObjs);
    }
}