import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Item } from './item';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const items = [
      { id: 1, name: 'Water', price: 100 },
      { id: 2, name: 'Desk', price: 4000 },
      { id: 3, name: 'Chair', price: 1200 },
      { id: 4, name: 'Bike', price: 10000 },
    ];
    return { items };
  }
  // Itemが常にidを持つようにするためにgenIdメソッドをオーバーライドします。
  // items配列が空の場合。
  // この場合、以下のメソッドは初期値（10）を返します。
  // items 配列が空でない場合、以下のメソッドが最も高い値を返します。
  // item max(id) + 1.
  genId(items: Item[]): number {
    return items.length > 0
      ? Math.max(...items.map((item) => item.id)) + 1
      : 10;
  }
}
