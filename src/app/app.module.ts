import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MaterialModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyDoN8PrbZVjZRATJVB-Bg5OWXJpyqURUsg",
      authDomain: "fir-app-956bc.firebaseapp.com",
      projectId: "fir-app-956bc",
      storageBucket: "fir-app-956bc.appspot.com",
      messagingSenderId: "505065429817",
      appId: "1:505065429817:web:4e64fc4c8f80a313c2a6e8"
    }),
    AngularFirestoreModule.enablePersistence(),
    NoopAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
