import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { NoteService } from '../service/notes.service';
import { HomePage } from '../pages/home/home';
import { NotesPage } from '../pages/notes/notes';
import { NotesDetailPage } from '../pages/notes-detail/notes-detail'; 

@NgModule({
  imports: [
    IonicModule.forRoot(MyApp)
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
    NoteService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}],
  bootstrap: [IonicApp]
})
export class AppModule {}
