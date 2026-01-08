import { Injectable } from '@angular/core';
import { Firestore, collection, getDocs } from '@angular/fire/firestore';

@Injectable({ providedIn: 'root' })
export class EntrenadorService {

  constructor(private firestore: Firestore) {}

  async obtenerPacks() {
    const ref = collection(this.firestore, 'packs');
    const snap = await getDocs(ref);
    return snap.docs.map(d => ({ id: d.id, ...d.data() }));
  }

  
}
