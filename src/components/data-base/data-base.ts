import { PersonalData } from '../interface-modules/Interfaces';

export default class DataBase {
  public db?: IDBDatabase;
  public dataAllPersons: PersonalData[];
  
  constructor() {
    this.db;
    this.openRequest();
    this.dataAllPersons = [];
  }
  
  openRequest(): void {
    const openRequest: IDBOpenDBRequest = indexedDB.open('Lenko-Igor', 1);

    openRequest.onupgradeneeded = (e: IDBVersionChangeEvent) => {
      const event = e.target as IDBOpenDBRequest
      const thisDB = event.result;
      console.log('upgr');
      
      if(!thisDB.objectStoreNames.contains('people')) {
        thisDB.createObjectStore('people');
      }
      
    }

    openRequest.onsuccess = (e: Event) => {
      const event = e.target as IDBOpenDBRequest;
      this.db = event.result;
      this.getAllPersons();
    }

    openRequest.onerror = (e) => console.log("Error:", e);
  }
  
  addPerson(person: PersonalData): void {
    if (this.db) {
      const transaction: IDBTransaction = this.db.transaction(['people'], 'readwrite');
      const store: IDBObjectStore = transaction.objectStore('people');
      const request: IDBRequest<IDBValidKey> = store.add(person, person.email)
      
      request.onerror = (e) => {console.log('error', e)}
      request.onsuccess = (e) => {console.log('it is good')}
    }  
  }

  getAllPersons() {
    const arrData: PersonalData[] = [];

    if (this.db) {
      const transaction: IDBTransaction = this.db.transaction(['people'], 'readwrite');
      const objectStore: IDBObjectStore = transaction.objectStore('people');
      const cursor = objectStore.openCursor();
      
      cursor.onsuccess = (e: Event) => {
        const res = cursor.result
        if (res) {
          arrData.push(res.value);
          res.continue();
        }
        this.dataAllPersons = arrData;
      }
    }
  } 

}