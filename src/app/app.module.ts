import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MessageActionComponent } from './messageActionComponent';
import { MessageShowComponent } from './messageShowComponent';

import {MessageService} from '../services/message.service';

@NgModule({
  declarations: [
    AppComponent,
    MessageActionComponent,
    MessageShowComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
