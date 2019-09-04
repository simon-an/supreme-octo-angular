import { Injectable } from '@angular/core';
import { Observable, of, Subject, BehaviorSubject } from 'rxjs';
import { Safe, SafeItem } from '~core/model';
import { map } from 'rxjs/operators';

interface ItemMap { [key: string]: SafeItem[]; }

@Injectable({
  providedIn: 'root'
})
export class SafeService {

  safes: BehaviorSubject<Safe[]> = new BehaviorSubject<Safe[]>([
    {
      id: '1',
      active: true,
      itemSize: 2,
      value: 999,
      users: ['123'],
      activeSince: new Date(1999, 1, 1)
    },
    {
      id: '2',
      active: true,
      itemSize: 3,
      value: 123,
      users: ['A', 'B', 'C'],
      activeSince: new Date(2018, 12, 30)
    }
  ]);

  items: BehaviorSubject<ItemMap> = new BehaviorSubject<ItemMap>({
    1: [
      { id: '1', name: 'Fahrrad', price: 55.5, safeId: '1' },
      { id: '2', name: 'Laptop', price: 999.99, safeId: '1' }
    ],
    2: [{ id: '3', name: 'Taschenrechner', price: 123.5, safeId: '2' },
    { id: '4', name: 'Sonnenbrille', price: 345, safeId: '2' },
    { id: '5', name: 'Brille', price: 567, safeId: '2' }]
  });

  constructor() { }

  getSafe(safeId: string): Observable<Safe> {
    return this.safes.asObservable().pipe(map((safes: Safe[]) => safes.find(safe => safeId === safe.id)));
  }

  getSafes(): Observable<Safe[]> {
    return this.safes.asObservable();
  }

  getItems(safeId: string): Observable<SafeItem[]> {
    return this.items.asObservable().pipe(map((items: ItemMap) => items[safeId]));
  }

  addItem(safeId: string, safeItem: SafeItem): Observable<SafeItem> {
    const newId = `${Math.random() * 1000000}`;
    safeItem.id = newId;
    const newMap: ItemMap = {
      ...this.items.getValue()
    };
    newMap[safeId] = [...newMap[safeId], safeItem];

    this.items.next(newMap);

    return of(safeItem);
  }
}
