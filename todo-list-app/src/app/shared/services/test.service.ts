import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from "angularfire2/firestore";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

export interface Test {
  id?: string;
  text: string;
  createdAt: number
}

@Injectable({
  providedIn: 'root'
})
export class TestService {
  private testsCollection: AngularFirestoreCollection<Test>;
  
  constructor(db: AngularFirestore) {
    this.testsCollection = db.collection<Test>('testCollection');
  }

  addTest(test: Test){
    return this.testsCollection.add(test);
  }
}
