import { Injectable } from '@angular/core';
import { Http } from '@angular/http'; 
import { Contact } from './contact';
import 'rxjs/add/operator/map';


@Injectable()
export class ContactService {

  constructor(private http: Http)  { }

  // Reterieving Contact Service
  getContacts(){

    return this.http.get('http://localhost:3000/api/contacts')
    .map(res => res.json());
  }

  // Add contacts
  addContact(newContact){
    event.preventDefault();
    return this.http.post('http://localhost:3000/api/contacts', newContact)
    .map(res => res.json());
  }


  // Delete Contacts
  deleteContact(id:string){
    return this.http.delete('http://localhost:3000/api/contacts/'+id)
    .map(res => res.json());
  }
}
