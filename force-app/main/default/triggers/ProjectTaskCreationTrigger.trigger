trigger ProjectTaskCreationTrigger on Project_Task__c (after update,before update)//after update,before insert,before update)
{
    if(trigger.isafter && trigger.isupdate && !ProjectTaskTriggerHelper.isTriggerRan)
   		{  
            ProjectTaskTriggerHelper.isTriggerRan = true;
      	ProjectTaskTriggerHelper.updaterelatedproject(Trigger.oldMap, Trigger.new);
      	ProjectTaskTriggerHelper.completionDateValidation(Trigger.new);
        ProjectTaskTriggerHelper.assignToProject(Trigger.new);
     	}   
   
    /*if(Trigger.isBefore)
    {       
         if(Trigger.isUpdate){
            ProjectTaskCreation.doBeforeUpdate(trigger.old, trigger.oldmap, trigger.new, Trigger.newmap);
        }
    }
*/
}





/*trigger ProjectTaskCreationTrigger on Project_Task__c (after insert,after update,before insert,before update)
{
    if(Trigger.isBefore)
    {
       if(Trigger.isInsert || Trigger.isUpdate)
       {
           ProjectTaskTriggerHelper.validatePreviousTaskField(Trigger.new);
          // ProjectTaskTriggerHelper.test(Trigger.new);
          
       }
    }   
    if(Trigger.isAfter)
    {
        if(Trigger.isInsert || Trigger.isUpdate) 
        {
            ProjectTaskTriggerHelper.assignToProject(Trigger.new);
            // ProjectTaskTriggerHelper.test(Trigger.new);            
        }
   }
}
*/