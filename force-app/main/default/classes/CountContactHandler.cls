public class CountContactHandler {
 public static void CountContactHelper(List<contact> newcontact, List<contact> oldcontact){
        set<id> accIds= new set<id>();
        if(newcontact != null){
            for(Contact c : newcontact){
                if(c.AccountId!=null){
                    accids.add(c.accountid);
                }
            }      
        }
         
        if(oldcontact != null){
            for(Contact c : oldcontact){
                accids.add(c.accountid);
            }
        }
         
     system.debug('accids==>'+accids);
        List<Account> accList = [Select Id, Numof_Contacts__c, (Select id from Contacts) from Account where Id IN :accIds];
         
        if(accList!=null){
            for(Account acc : accList){
                acc.Numof_Contacts__c = acc.Contacts.size();
            } 
        }
         
        if(!accList.isEmpty()){
            update accList;
        }
     system.debug('accList==>'+accList);
     
    } 
}