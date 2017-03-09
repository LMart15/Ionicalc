import uuidV4 from "uuid/v4"
import { Note } from "../model/notes.model";

export class NoteService {

  notes:Note[] = this.loadNotes();

  getNote(noteId:string){
      const note = this.notes.find(it => it.id === noteId);
      return Object.assign({}, note);
  }

  updateNote(note:Note){
      const index = this.notes.findIndex(it => it.id === note.id);
      this.notes[index] = note;
      this.setNotes();
  }

  removeNote(noteId:string){
      const index = this.notes.findIndex(it => it.id === noteId);
      this.notes.splice(index, 1);
      this.setNotes();
  }

  addNote(note:Note){
      note.id = uuidV4();
      this.notes.push(note);
      this.setNotes();
  }

  private loadNotes(): Note[]{
      const notes = localStorage.getItem("notes");
      if(notes){
        return JSON.parse(notes);
      }else{
        return [];
      }
  }

  private setNotes(){
    localStorage.setItem("notes", JSON.stringify(this.notes));
  }

}