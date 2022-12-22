trigger AccountTrigger on Account (before insert,after insert,before update,after update)
{
	if(trigger.isInsert)
    {
        if(trigger.isbefore)
        {
            AccountTriggerHandler.copyBillingToShipping(Trigger.new);
        }
    }
    
    if(trigger.isUpdate)
    {
        if(trigger.isbefore)
        {
            AccountTriggerHandler.copyBillingToShipping(Trigger.new);
        }
    }
}