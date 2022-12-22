public class ContactTriggerHandler
{
    public static Boolean isTriggerRan= false;
    
    public static void createDuplicateContact(List<Contact> newContactList)
    {
        List<Contact> duplicateConsToInsert = new List<Contact>();
        for(Contact con :newContactList)
        {
            Contact con1 = new Contact();
            con1.LastName = 'Duplicate Account';
            duplicateConsToInsert.add(con1);
        }
        insert duplicateConsToInsert;
    }
}