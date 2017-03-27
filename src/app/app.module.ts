import { NgModule, ErrorHandler } from '@angular/core';
import { Http } from '@angular/http';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { TranslateModule, TranslateLoader, TranslateStaticLoader } from 'ng2-translate/ng2-translate';
import { MyApp } from './app.component';
import { LanguageService } from '../service/language.service';
import { NoteService } from '../service/notes.service';
import { HomePage } from '../pages/home/home';
import { NotesPage } from '../pages/notes/notes';
import { NotesDetailPage } from '../pages/notes-detail/notes-detail';

import { AngularFireModule } from 'angularfire2'; 

export function createTranslateLoader(http: Http) {
    return new TranslateStaticLoader(http, 'assets/i18n', '.json');
}

// Initialize Firebase
  export const firebaseConfig = {
    apiKey: "AIzaSyCVFozckBBUXz3tNYFnOO3Ec8h9LiOAxgQ",
    authDomain: "shopfire-780c1.firebaseapp.com",
    databaseURL: "https://shopfire-780c1.firebaseio.com",
    storageBucket: "shopfire-780c1.appspot.com",
    messagingSenderId: "1065749770398"
  };

@NgModule({
  imports: [
    TranslateModule.forRoot({
      provide: TranslateLoader,
      useFactory: (createTranslateLoader),
      deps: [Http]
    }),
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  declarations: [
    MyApp,
    HomePage,
    NotesPage,
    NotesDetailPage
  ],
  entryComponents: [
    MyApp,
    HomePage,
    NotesPage,
    NotesDetailPage
  ],
  providers: [
    LanguageService,
    NoteService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}],
  bootstrap: [IonicApp]
})
export class AppModule {}
