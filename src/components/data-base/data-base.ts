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

  upDatePerson(person: PersonalData) {
    if (this.db) {
      const transaction: IDBTransaction = this.db.transaction(['people'], 'readwrite');
      const objectStore: IDBObjectStore = transaction.objectStore('people');
      const cursor = objectStore.openCursor();
      
      cursor.onsuccess = (e: Event) => {
        const res = cursor.result
        if (res) {
          if(res.value.email === person.email){//we find by id an user we want to update
            var res1 = res.update(person);
            res1.onsuccess = function(e){
              console.log("update success!!");
            }
            res1.onerror = function(e){
              console.log("update failed!!");
            }
          }
          res.continue();
        }
      }
    }
  }

}