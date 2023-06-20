import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

import { NgIdleKeepaliveModule } from '@ng-idle/keepalive'
import { HttpClientModule } from '@angular/common/http'; 



@NgModule({
  imports:      [ BrowserModule, FormsModule ,NgIdleKeepaliveModule.forRoot(),HttpClientModule],
  declarations: [ AppComponent, HelloComponent ],
  bootstrap:    [ AppComponent ] 
})


export class AppModule { 


  
}
