import { LightningElement, track } from 'lwc';
import getAlbums from '@salesforce/apex/AlbumController.getAlbums';
export default class ParentWrapper extends LightningElement {
    @track albums;

    fetchAlbums() {
        getAlbums() 
            .then(result => {
                this.albums = result;
            })
            .catch(error => {
                console.error("error getting albums: ", error);
            })
        
    }



}