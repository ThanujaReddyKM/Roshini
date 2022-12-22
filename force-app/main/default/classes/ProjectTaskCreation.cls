public class ProjectTaskCreation
{

    public static void projectTask(List<Project__c> projectList)
    {
      List<String> allTypes =new  List <String> {'New Task', 'Planning Phase', 'Construction Work', 'Completion Step', 'Contract End'};
      List<Project_Task__c> taskLIst = new List<Project_Task__c>();
      for(Project__c pro :projectList)
      {
        for(integer i=0; i<=4;i++)
        {
            Project_Task__c taskcc = new  Project_Task__c();
            taskcc.Project__c = pro.Id;
            taskcc.Type__c = allTypes[i];
            taskLIst.add(taskcc);
        }
      }
      insert taskLIst;

      for(Integer i=1; i<taskLIst.size();i++)
      {
        Project_Task__c allTasks = taskLIst[i];
        if(allTasks.Type__c != 'New Task')
        {
          allTasks.Previous_Task__c = taskLIst[i-1].Id;
        }
      }
      update taskLIst;
    } 
    
    public static void projectValidation(List<Project__c> projectList,Map<id,Project__c> projectListOld)
    {
        // List<Project__c> projectList1 = [select id,Status__c from Project__c where Status__c != null];
    /*     for(Project__c iterator :projectList)
         {
             if(iterator.Status__c != null)
             {
                  iterator.addError('thanuja insert');
             }
             
             for(Project__c iteratorOld :projectListOld)
             {
                   if(iterator.Status__c != iteratorOld.Status__c)
                   {
                       iterator.addError('dfjlsdjh update');
                   }
             }
         }
        */
        
          for(Project__c cannotChange :projectList)
         {
             Project__c accRecold = projectListOld.get(cannotChange.Id);
             if(cannotChange.Status__c != accRecold.Status__c)
             {
                 cannotChange.Status__c.addError('Account name cannot be changed Roshini');
             }
         }
      
    }
    /*
    public static void projectValidation(List<Project__c> projectList)
    {
        
      List<Project__c> projectList1 = [select id,Status__c from Project__c where Status__c != null];
      for(Project__c prjectIterator :projectList)
      {
     
            if(prjectIterator.Status__c != null)
            {
                    prjectIterator.Status__c.adderror('This Field Cannot be selected manually insert');
            }    
           for(Project__c existrecord :projectList1)
                {  
                    if(existrecord.Status__c == prjectIterator.Status__c){
                      prjectIterator.Status__c.adderror('This Field Cannot be selected manually');
                    }
                    
                }
        }      
	}
    */
     
   
}
/*
     
*/
    
    /*
    public static void projectValidation1(List<Project__c> projectList)
    {
         List<Project__c> projectList1 = [select id,Status__c from Project__c where Status__c != null];
        // List<Project__c> updateList = new List<Project__c>();
          set<id> LeadIds= new set<Id>();
        for(Project__c l : projectList1){
       
            if(leadIds.contains(l.Id)){
                
                leadIds.add(l.Id);
                 l.Status__c.adderror('This Field Cannot be selected manually insert');
               // updateList.add(l);
        }}
    }

private static void preventTypeChange(List<Project_Task__c> projectTaskList, Map<Id, Project_Task__c> oldProjectTaskMap) {
        for(Project_Task__c projectTask : projectTaskList) {
            if(oldProjectTaskMap.get(projectTask.Id).Type__c != projectTask.Type__c) {
                projectTask.Type__c.addError('Cannot update type now!!!');
            }
        }
    }
    public static void doBeforeUpdate(List<Project_Task__c> oldList, Map<Id,Project_Task__c> oldMap, List<Project_Task__c> newList, Map<Id,Project_Task__c> newMap){
        preventTypeChange(newList, oldMap);
        //checkIfAttachmentIsAvailable(newList, newMap, oldMap);	
        //checkCompletionDateIsSelected(newList);
       // checkCompletionDateIsSelectedAndProjectIsNotCompleted(newList);
    }
  */  
    
          /*
      if(isUpdate == true)
       {
            if(prjectIterator.Status__c != null)
        {
                for(Project__c existrecord :projectList1)
                {  
                    if(existrecord.Status__c == prjectIterator.Status__c){
                      prjectIterator.Status__c.adderror('This Field Cannot be selected manually');
                    }
                    
                }
        }
        
       }
*/