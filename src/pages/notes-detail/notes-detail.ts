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
    const noteAmount = navParams.get('noteAmount');
    
      if(noteId){
        this.note = noteService.getNote(noteId);
      }
      else if(noteAmount){
        this.note = {
          title: "",
          note: noteAmount
        };
      }
      else{
      this.note = {
          title: "",
          note: ""
        };   
      }
    }
  
  onSave() {
    if(this.note.id){
    this.noteService.updateNote(this.note);
  }
  else{
    this.noteService.addNote(this.note);
  }
    this.navCtrl.pop();
  }

}
