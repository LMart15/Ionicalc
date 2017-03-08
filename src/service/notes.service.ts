import { Note } from "../model/notes.model";

export class NoteService {

  static nextId = 3;

  notes: Note[] = [{
      id: 1,
      title: "Rent + Hydro",
      note: "1275"
    },
    {
      id: 2,  
      title: "Lunch Money per day",
      note: "5.75"
    }
  ];

  getNote(noteId:number){
      const note = this.notes.find(it => it.id === noteId);
      return Object.assign({}, note);
  }

  updateNote(note:Note){
      const index = this.notes.findIndex(it => it.id === note.id);
      this.notes[index] = note;
  }

  removeNote(noteId:Number){
      const index = this.notes.findIndex(it => it.id === noteId);
      this.notes.splice(index, 1);
  }

  addNote(note:Note){
      note.id = NoteService.nextId++;
      this.notes.push(note);
  }

}