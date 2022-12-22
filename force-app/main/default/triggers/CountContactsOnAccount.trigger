trigger CountContactsOnAccount on Contact (after insert, after update, after delete, after undelete) {

    if(Trigger.isinsert || Trigger.isupdate || trigger.isdelete || Trigger.isundelete){
        CountContactHandler.CountContactHelper(trigger.new, trigger.old);
    }
}