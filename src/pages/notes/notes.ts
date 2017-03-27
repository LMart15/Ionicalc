import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TranslateService } from 'ng2-translate';
import { LanguageService } from "../../service/language.service";
import { NotesDetailPage } from "../notes-detail/notes-detail";
import { Note } from "../../model/notes.model";
import { NoteService } from "../../service/notes.service";
import {AngularFire, FirebaseListObservable} from 'angularfire2';

@Component({
  selector: 'page-notes',
  templateUrl: 'notes.html'
})
export class NotesPage {

  //notes: Note[];
  notes: FirebaseListObservable<any>;

  constructor(private navCtrl: NavController, private navParams: NavParams, private translateService: TranslateService, private languageService: LanguageService, af: AngularFire) {
    translateService.use(languageService.lang);
    
    //this.notes = noteService.notes;
    this.notes = af.database.list('/notes');
    console.log(this.notes);
  } 

  onNoteClick(noteId: String){
    this.navCtrl.push(NotesDetailPage, {noteId: noteId});
  };

  onAddClick(note: Note){
    this.navCtrl.push(NotesDetailPage);
  };

  onTrashClick(key: string){
    this.notes.remove(key);
  };

}


