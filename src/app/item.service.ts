import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MessageService } from './message.service';
import { Item } from './item';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable()
export class ItemService {
  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) {}

  private itemsUrl = 'api/items'; // Web APIのURL

  /** サーバーからヒーローを取得する */
  getItems(): Observable<Item[]> {
    return this.http.get<Item[]>(this.itemsUrl).pipe(
      tap((items) => this.log('fetched items')),
      catchError(this.handleError<Item[]>('getItems', []))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: リモート上のロギング基盤にエラーを送信する
      console.error(error); // かわりにconsoleに出力

      // TODO: ユーザーへの開示のためにエラーの変換処理を改善する
      this.log(`${operation} failed: ${error.message}`);

      // 空の結果を返して、アプリを持続可能にする
      return of(result as T);
    };
  }

  private log(message: string) {
    this.messageService.add(`ItemService: ${message}`);
  }
}
