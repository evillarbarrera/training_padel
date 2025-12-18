import { Injectable } from '@angular/core';
import { Firestore, collectionData, collection, addDoc, updateDoc, deleteDoc, doc } from '@angular/fire/firestore';
import { Pack } from '../models/pack.model';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class PacksService {

  private packRef = collection(this.firestore, 'packs');

  constructor(private firestore: Firestore) {}

  getPacks(): Observable<Pack[]> {
    return collectionData(this.packRef, { idField: 'id' }) as Observable<Pack[]>;
  }

  createPack(pack: Pack) {
    return addDoc(this.packRef, pack);
  }

  updatePack(id: string, pack: Partial<Pack>) {
    const docRef = doc(this.firestore, `packs/${id}`);
    return updateDoc(docRef, pack);
  }

  deletePack(id: string) {
    const docRef = doc(this.firestore, `packs/${id}`);
    return deleteDoc(docRef);
  }
}
