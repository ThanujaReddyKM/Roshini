trigger taskCreation on Project__c (after insert,before insert,after update,before update) 
{  
    if(Trigger.isBefore)
    {
         if(Trigger.isInsert) 
        {
            ProjectTaskCreation.projectValidation(Trigger.new,trigger.oldMap);
         
        }
        if(trigger.isUpdate)
        {
            ProjectTaskCreation.projectValidation(Trigger.new,trigger.oldMap);
          
        }
    }
  
   if(Trigger.isAfter && Trigger.isInsert) 
   {
    ProjectTaskCreation.projectTask(Trigger.new);   
   }
    
     if(Trigger.isAfter && Trigger.isUpdate)
        {
          //  ProjectTaskCreation.projectValidation(Trigger.new);
        }

}