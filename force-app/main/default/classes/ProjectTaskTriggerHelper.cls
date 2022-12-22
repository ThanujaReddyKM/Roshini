public class ProjectTaskTriggerHelper {
    public static void assignToProject(List <Project_Task__c> projectTaskList)
    {
      set<Id> projectTaskId =new Set <Id>();
      for(Project_Task__c projectTaskLoop: projectTaskList )
      {
        projectTaskId.add(projectTaskLoop.Project__c);
      }

      List<Project__c> projectList =[Select Id,Status__c From Project__c WHERE Id =: projectTaskId];
      for(Project__c projectAllList:projectList)
      {
        for(Project_Task__c taskAllList :projectTaskList)
        {
          if(taskAllList.Completed__c == TRUE)
          {
               if(taskAllList.Type__c=='--None--')
            {
              projectAllList.Status__c = '--None--';
            }
              
           else if(taskAllList.Type__c=='New Task')
            {
              projectAllList.Status__c = 'New';
            }
           else if(taskAllList.Type__c=='Planning Phase')
            {
              projectAllList.Status__c = 'Planning';
            }
           else if(taskAllList.Type__c=='Construction Work')
            {
              projectAllList.Status__c = 'Construction';
            }
          else  if(taskAllList.Type__c=='Completion Step')
            {
              projectAllList.Status__c = 'Deployment';
            }
            else {
              projectAllList.Status__c = 'Signoff';
            }
          }
        }    
      }
      update projectList;
    }

//recursive trigger
    public static Boolean isTriggerRan= false;
public static void updaterelatedproject (Map<Id,Project_Task__c> oldupdtasks, List<Project_Task__c> updtasks){
    
       
    
        List<Project_Task__c> projectaskList = new List<Project_Task__c>();
         Map<Id,Project_Task__c> taskMap = new  Map<Id,Project_Task__c>();
        set<Id> projectTaskIds = new set<Id>();
         set<Id> projectTaskIds1 = new set<Id>();
        for (Project_Task__c newrec : updtasks )
        {
            if(oldupdtasks.get(newrec.Id).Completed__c != newrec.Completed__c && oldupdtasks.get(newrec.Id).Completed__c != true)
            {
                if(newrec.Previous_Task__c != null)
                {
                   projectTaskIds.add(newrec.Previous_Task__c);
                   projectaskList.add(newrec); 
                }
            } 
                           
            else if(oldupdtasks.get(newrec.Id).Completed__c == true && newrec.Completed__c != true){
                projectTaskIds1.add(newrec.Id);
                taskMap.put(newrec.Id,newrec); 
            }
        }
       // System.debug(projectTaskIds);
        Map<String, String> projectpicklist = new Map<String, String>{'New Task' => 'New','Planning Phase' => 'Planning' , 'Construction Work' => 'Construction', 'Completion Step' => 'Deployment','Contract End' => 'Signoff'};
        Map<Id,Project__c> projectMap = new Map<Id,Project__c>();   
         Map<Id,Project_Task__c> projectTaskMap = new Map<Id,Project_Task__c>([Select Id,Project__c, Completed__c From Project_Task__c where Id =: projectTaskIds]);  
         Map<Id,Project_Task__c> projectTaskMap1 = new Map<Id,Project_Task__c>([Select Id,Project__c,Previous_Task__c, Completed__c From Project_Task__c where Previous_Task__c =: projectTaskIds1]); 
        if(projectTaskIds.size() > 0)
        System.debug(projectTaskIds);
        {
            for(Project_Task__c taskList : projectaskList )
            {
                if(projectTaskMap.get(taskList.Previous_Task__c).Completed__c != true ) 
                {
                    taskList.Completed__c.addError('You Cannot completed before previous task completed');                 
                }
                 else 
                {
                    Project__c project = new Project__c(Id = taskList.Project__c,status__c = projectpicklist.get(taskList.Type__c));
                       projectMap.put(taskList.Project__c, project);
                }
            }   
         } 
         if(projectTaskIds1.size() > 0)
         {
            for(Id a1 : projectTaskMap1.KeySet()){
                    if(projectTaskMap1.get(a1).Completed__c == true)
                 {
                    taskMap.get(projectTaskMap1.get(a1).Previous_Task__c).Completed__c .addError('Your next TASK IS COMPLETED');
                 }
             }
         }     
        if(projectMap.Values().size() > 0)
        {
            //System.debug(projectMap.Values());
            update projectMap.Values();
        }
    }    
    
    public static void completionDateValidation(List<Project_Task__c> proTaskList)
    {
        for(Project_Task__c projectTaskIterator :proTaskList)
        {
            if(projectTaskIterator.Completed__c ==true && projectTaskIterator.Completion_Dates__c==  null)
            {
                projectTaskIterator.Completion_Dates__c.addError('Please Give Completion date');
            }
            if(projectTaskIterator.Completed__c ==false && projectTaskIterator.Completion_Dates__c!=null)
            {
                projectTaskIterator.Completed__c.addError('Completed Field should be marked');
            }
        }
    }
  
}