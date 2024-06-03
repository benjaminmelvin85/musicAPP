public with sharing class AlbumController {
   

    @AuraEnabled(Cacheable = true)
    public static List<Album__c> getAlbums() {
        return [SELECT Id, Name, Artist__r.Name, Year_Released__c FROM Album__c];
    }
}