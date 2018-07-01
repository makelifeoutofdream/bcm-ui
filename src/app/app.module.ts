import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule, MatInputModule, MatButtonModule } from '@angular/material';
import { OwnerSigninComponent } from './owner-signin/owner-signin.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule, routingComponents } from './/app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    OwnerSigninComponent, 
    routingComponents
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule, FormsModule, MatButtonModule, AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
