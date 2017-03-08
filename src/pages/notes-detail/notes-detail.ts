import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Note } from "../../model/notes.model";
import { NoteService } from "../../service/notes.service";

@Component({
  selector: 'page-notes-detail',
  templateUrl: 'notes-detail.html'
})
export class NotesDetailPage {

  note: Note;

  constructor(public navCtrl: NavController, public navParams: NavParams, private noteService: NoteService) {

      const noteId = navParams.get('noteId');
      this.note = noteService.getNote(noteId);

      const noteAmount = navParams.get('noteAmount');
      this.note.note = noteAmount;
  }

  onSave() {
    this.noteService.updateNote(this.note);
    this.navCtrl.pop();
  }

}
