import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TranslateService } from 'ng2-translate';
import { LanguageService } from "../../service/language.service";
import { NotesDetailPage } from "../notes-detail/notes-detail";
import { Note } from "../../model/notes.model";
import { NoteService } from "../../service/notes.service";

@Component({
  selector: 'page-notes',
  templateUrl: 'notes.html'
})
export class NotesPage {

  notes: Note[];

  constructor(private navCtrl: NavController, private navParams: NavParams, private translateService: TranslateService, private languageService: LanguageService, private noteService: NoteService) {
    translateService.use(languageService.lang);
    
    this.notes = noteService.notes;
  } 

  onNoteClick(note: Note){
    this.navCtrl.push(NotesDetailPage, {noteId: note.id});
  };

  onAddClick(note: Note){
    this.navCtrl.push(NotesDetailPage);
  };

  onTrashClick(note: Note){
    this.noteService.removeNote(note.id);
  };

}

