trigger ContactTrigger on Contact (after insert) 
{
    if(trigger.isafter && trigger.isinsert && !ContactTriggerHandler.isTriggerRan)
    {
        ContactTriggerHandler.isTriggerRan=true;
        ContactTriggerHandler.createDuplicateContact(trigger.new);
    }
	
}