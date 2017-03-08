import { Note } from "../model/notes.model";

export class NoteService {

  static nextId = 4;

  notes: Note[] = [{
      id: 1,
      title: "Rent",
      note: "Lunch"
    },
    {
      id: 2,  
      title: "Lunch Money",
      note: "Lunch"
    },
    {
      id: 3, 
      title: "Lunch Money",
      note: "Lunch"
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

  addNote(note:Note){
      note.id = NoteService.nextId++;
      this.notes.push(note);
  }

}