import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Note } from "../../model/notes.model";
import { NoteService } from "../../service/notes.service";

@Component({
  selector: 'page-notes',
  templateUrl: 'notes.html'
})
export class NotesPage {

  notes: Note[];

  constructor(private navCtrl: NavController, private navParams: NavParams, private noteService: NoteService) {

    this.notes = noteService.notes;

  } 
}

