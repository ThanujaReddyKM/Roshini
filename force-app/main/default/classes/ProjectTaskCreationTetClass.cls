@isTest
public class ProjectTaskCreationTetClass

{

 @isTest
    public static void projectTestMethod()
    {
        List<Project__c> proList = new List<Project__c>();
        Project__c projectObj = new Project__c();
        projectObj.Name = 'Thanuja';
        projectObj.Status__c ='New Task';
    	proList.add(projectObj);
        insert proList;
        
        List<Project_Task__c> proTaskList = new List<Project_Task__c>();
        Project_Task__c proTaskObj = new Project_Task__c();
        proTaskObj.Completed__c=true;
         //proTaskObj.Type__c='New Task';
        proTaskObj.Completion_Dates__c=Date.newInstance(2022, 06, 09);
         proTaskObj.Project__c = projectObj.Id;
        insert proTaskObj;
        proTaskList.add(proTaskObj);
       
        
         List<Project__c> projectValues = [Select Id,Name,Status__c from Project__c
        Where Id =: proList[0].Id];
        System.assertEquals('New',projectValues[0].Status__c);  
        
         
    }      
    
    
     @isTest
    public static void projectTestMethod1()
    {
        List<Project__c> proList = new List<Project__c>();
        Project__c projectObj = new Project__c();
        projectObj.Name = 'Thanuja';
        projectObj.Status__c ='Planning Phase';
    	proList.add(projectObj);
        insert proList;
        
        
        
        List<Project_Task__c> proTaskList = new List<Project_Task__c>();
        Project_Task__c proTaskObj = new Project_Task__c();
       
         //proTaskObj.Type__c='Planning Phase';
        
         proTaskObj.Project__c = projectObj.Id;
        insert proTaskObj;
        proTaskList.add(proTaskObj);
         proTaskObj.Completed__c=true;
        proTaskObj.Completion_Dates__c=Date.newInstance(2022, 06, 09);
        update proTaskObj;
        
        
        
         List<Project__c> projectValues = [Select Id,Name,Status__c from Project__c
        Where Id =: proList[0].Id];
        System.assertEquals('Planning',projectValues[0].Status__c);  
    }

    
     @isTest
    public static void projectTestMethod2()
    {
        List<Project__c> proList = new List<Project__c>();
        Project__c projectObj = new Project__c();
        projectObj.Name = 'Thanuja';
        projectObj.Status__c ='Construction Work';
    	proList.add(projectObj);
        insert proList;
        
        List<Project_Task__c> proTaskList = new List<Project_Task__c>();
        Project_Task__c proTaskObj = new Project_Task__c();
       // proTaskObj.Completed__c=true;
        // proTaskObj.Type__c='Construction Work';
       // proTaskObj.Completion_Dates__c=Date.newInstance(2022, 06, 09);
         proTaskObj.Project__c = projectObj.Id;
        insert proTaskObj;
        proTaskList.add(proTaskObj);
        
         List<Project__c> projectValues = [Select Id,Name,Status__c from Project__c
        Where Id =: proList[0].Id];
        System.assertEquals('Construction',projectValues[0].Status__c);  
    }
    
     @isTest
    public static void projectTestMethod3()
    {
        List<Project__c> proList = new List<Project__c>();
        Project__c projectObj = new Project__c();
        projectObj.Name = 'Thanuja';
     //   projectObj.Status__c ='Completion Step';
    	proList.add(projectObj);
        insert proList;
        
        List<Project_Task__c> proTaskList = new List<Project_Task__c>();
        Project_Task__c proTaskObj = new Project_Task__c();
       // proTaskObj.Completed__c=true;
         proTaskObj.Type__c='Completion Step';
       // proTaskObj.Completion_Dates__c=Date.newInstance(2022, 06, 09);
         proTaskObj.Project__c = projectObj.Id;
        insert proTaskObj;
        proTaskList.add(proTaskObj);
        
         List<Project__c> projectValues = [Select Id,Name,Status__c from Project__c
        Where Id =: proList[0].Id];
        System.assertEquals('Deployment',projectValues[0].Status__c);  
    }
       
    @isTest
    public static void projectTestMethod4()
    {
        List<Project__c> proList = new List<Project__c>();
        Project__c projectObj = new Project__c();
        projectObj.Name = 'Thanuja';
        projectObj.Status__c ='Contract End';
    	proList.add(projectObj);
        insert proList;
        
        List<Project_Task__c> proTaskList = new List<Project_Task__c>();
        Project_Task__c proTaskObj = new Project_Task__c();
       // proTaskObj.Completed__c=true;
       //  proTaskObj.Type__c='Contract End';
       // proTaskObj.Completion_Dates__c=Date.newInstance(2022, 06, 09);
         proTaskObj.Project__c = projectObj.Id;
        insert proTaskObj;
        proTaskList.add(proTaskObj);
        
         List<Project__c> projectValues = [Select Id,Name,Status__c from Project__c
        Where Id =: proList[0].Id];
        System.assertEquals('Signoff',projectValues[0].Status__c);  
    }
    
    
    
    
    
}

/*
 *  @isTest
    public static void projectTestMethod1()
    {
        List<Project__c> proList = new List<Project__c>();
        Project__c projectObj = new Project__c();
        projectObj.Name = 'Thanuja';
        projectObj.Status__c ='Planning Phase';
    	proList.add(projectObj);
        insert proList;
        
        List<Project_Task__c> proTaskList = new List<Project_Task__c>();
        Project_Task__c proTaskObj = new Project_Task__c();
        proTaskObj.Project__c = projectObj.Id;
        proTaskObj.Type__c='Planning Phase';
        proTaskObj.Completion_Dates__c=null;
        proTaskObj.Completed__c=false;
        insert proTaskObj;
        proTaskList.add(proTaskObj);
        
                List<Project_Task__c> projectTaskValues = [Select Id,Completed__c,Type__c,
                                                   Completion_Dates__c from Project_Task__c Where Id =: proList[0].Id];
        
        System.assertEquals('Planning Phase',projectTaskValues[0].Type__c);
       
    }
*/