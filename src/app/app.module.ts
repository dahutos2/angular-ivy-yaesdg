import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BuyComponent } from './buy/buy.component';
import { MessageComponent } from './message/message.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    // HttpClientInMemoryWebApiModuleモジュールは、HTTPリクエストを傍受する。
    // シミュレートされたサーバーレスポンスを返します。
    // 実際のサーバーがリクエストを受信できるようになったら、これを削除してください。
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
      dataEncapsulation: false,
    }),
    MatButtonToggleModule,
  ],
  declarations: [AppComponent, BuyComponent, MessageComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
