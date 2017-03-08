import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { NotesPage } from '../pages/notes/notes'; 

@NgModule({
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  declarations: [
    MyApp,
    HomePage,
    NotesPage
  ],
  entryComponents: [
    MyApp,
    HomePage,
    NotesPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}],
  bootstrap: [IonicApp]
})
export class AppModule {}
