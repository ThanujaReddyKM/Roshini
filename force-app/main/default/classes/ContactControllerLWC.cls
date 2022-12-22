public with sharing class ContactControllerLWC {
    public ContactControllerLWC() {

    }


    @AuraEnabled(cacheable=true)
    public static List<Contact> getContactList()
    {
        return [SELECT Id,FirstName,LastName,Phone,Email from Contact limit 10];
    }

    @AuraEnabled(cacheable=true)
    public static List<Account> accountList()
    {
        return [SELECT Id, Name,AccountNumber,Phone from Account limit 10];  
      }

    //   @AuraEnabled(cacheable=true)
    @AuraEnabled
      public static List<Opportunity> opportunityList()
      {
          return [SELECT Id, Name,Amount,CloseDate,StageNAme from Opportunity limit 10];  
        }

        @AuraEnabled
        public static Id createOpportunity (Opportunity opportunity)
        {
            insert opportunity;
            return opportunity.Id;
        }


        // @AuraEnabled
        // public static List<Account> searchAccount(Account account){

            // return [SELECT Id, Name,AccountNumber,Phone,State__c,City__C 
            // from Account
            // where Name like : + '%'account.Name +'%'
            // OR Phone like : + '%' + account.Phone + '%'];
        
        // }

        @auraEnabled
        public static List<Account> searchAccount(Account account)
        {
            return[SELECT Id, Name, AccountNumber, Phone 
              from Account  where Name like : + '%' + account.Name + '%'
              OR Phone =:  account.Phone]; 
            //    OR Phone like : + '%' + account.Phone + '%'];
          
        }

}