import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private firestore: AngularFirestore) { }

  public getUsers() {
    return this.firestore.collection(`users`).snapshotChanges();
  }

  public getDialog() {
    return this.firestore.collection(`dialog`).snapshotChanges();
  }

  public sendMessage(message) {
    return this.firestore.collection(`dialog`).add(message);
  }
}
