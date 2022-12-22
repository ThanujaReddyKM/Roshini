public class TryValidateClass {

    public static void validatePreviousTaskField(List<Project_Task__c> projectTaskValidateList)
    {
        set<id> projectTaskIds = new set<id>();
        for(Project_Task__c projectTaskIterate :projectTaskValidateList)
        {
            System.debug('for');
            projectTaskIds.add(projectTaskIterate.Project__c);
        }

         //Any task cannot be marked as completed if its previous task is not completed validation.
         List<Project__c> projectList =[select id,(select id, Completed__c,Type__c from Project_Tasks__r) from  Project__c where id IN : projectTaskIds] ;
         for(Project__c projectIterate :projectList)
         {
             System.debug('inside first for');
             for(Project_Task__c projectTaskIterator : projectTaskValidateList)
             {
                 System.debug('inside ssecond for');
                 for(Project_Task__c projectTaskInnerLoop : projectIterate.Project_Tasks__r)
                 {
                     System.debug('inside third for');
                     if(((projectTaskIterator.Completed__c==true) && (projectTaskIterator.Type__c=='Planning Phase' && projectTaskInnerLoop.Type__c=='New Task'))) 
                     { 
                         System.debug('inside 1st if');
                         if( projectTaskInnerLoop.Completed__c == false)
                         {   
                             System.debug('inside 2st if');
                                 projectTaskIterator.Completed__c.addError('before completeing the first task we cant marked the next task as completed');
                         }
                    }
                     
                  
                    else   if((projectTaskIterator.Completed__c==true) &&(projectTaskIterator.Type__c=='Construction Work' && projectTaskInnerLoop.Type__c=='Planning Phase'))
                     { 
                         System.debug('inside 2 1st if');
                         if( projectTaskInnerLoop.Completed__c == false)
                         {   
                             System.debug('inside 2 2st if');
                                 projectTaskIterator.Completed__c.addError('before completeing the first task we cant marked the next task as completed');
                         }
                    }
                }
            }
        }
    }
 
 /*
                         if(projectTaskIterator.Type__c=='Completion Step' && projectTaskInnerLoop.Type__c=='Construction Work')
                         {
                             if(projectTaskInnerLoop.Completed__c == false)
                             {
                                 projectTaskIterator.Completed__c.addError('before completeing the first task we cant marked the next task as completed');
                             }
                         }
                         if(projectTaskIterator.Type__c=='Contract End' && projectTaskInnerLoop.Type__c=='Completion Step')
                      
                         {
                             if(projectTaskInnerLoop.Completed__c == false)
                             {
                                 projectTaskIterator.Completed__c.addError('before completeing the first task we cant marked the next task as completed');
                             }
                         }
*/
                     }