trigger AccountTrigger1 on Account (before insert,after insert,before update,after update,before delete,after delete,after undelete)//
{
	if(trigger.isbefore)
    {
      
        if(trigger.isinsert)
        {

            AccountHandler.prePopulating(Trigger.new);
            AccountHandler.lessThanRevenue(Trigger.new);
            //System.debug('@@Inserted Records' +Trigger.new);
        }
        
        if(trigger.isUpdate){
           AccountHandler.cannotChangeAccountName(trigger.new,trigger.oldMap);
          system.debug('new values');
             system.debug(trigger.new);
             system.debug(trigger.newMap);
            
              system.debug('old values');
             system.debug(trigger.old);
            system.debug(trigger.oldMap);
        }
        if(trigger.isDelete)
        {
            AccountHandler.cannotDeleteActiveStatue(trigger.old);
        }
    }
    if(trigger.isafter)
    {
        if(trigger.isinsert)
        {
            
			AccountHandler.contactNameAsAccount(trigger.new);  
             System.debug('@@Inserted Records' +Trigger.new);
        }
        if(trigger.isupdate)
        {
            AccountHandler.changeMailingAddress(trigger.new,trigger.oldMap);
        }
        if(trigger.isdelete)
        {
            AccountHandler.emailToDeletedAccount(trigger.old);
        }
        if(trigger.isundelete)
        {
            AccountHandler.emailToRestoreAccount(trigger.new);
        }
    }
}