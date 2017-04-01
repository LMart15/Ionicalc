import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TranslateService } from 'ng2-translate';
import { LanguageService } from "../../service/language.service";
import { Note } from "../../model/notes.model";
import {AngularFire, FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2';

@Component({
  selector: 'page-notes-detail',
  templateUrl: 'notes-detail.html'
})
export class NotesDetailPage {

  note: Note;
  noteObservable: FirebaseObjectObservable<any>;
  notes: FirebaseListObservable<any>;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, private translateService: TranslateService, private languageService: LanguageService, af: AngularFire) {

    this.notes = af.database.list('/notes');
    
    translateService.use(languageService.lang);

    const noteId = navParams.get('noteId');
    const noteAmount = navParams.get('noteAmount');
    
      if(noteId){
        this.noteObservable = af.database.object('/notes/' + noteId, { preserveSnapshot: true });
          this.noteObservable.subscribe(snapshot => {
          this.note = {
              id: snapshot.key,
              title: snapshot.val().title,
              note: snapshot.val().note,
              date: snapshot.val().date
            }; 
          });
      }
      else if(noteAmount){
        this.note = {
          title: "",
          note: noteAmount,
          date: ""
        };
      }
      else{
      this.note = {
          title: "",
          note: "",
          date: ""
        };   
      }
    }
  
  onSave(note) {
    if(note.id){
    this.noteObservable.update({ title: note.title, note: note.note});
  }
  else{
    this.notes.push(this.note);
  }
    this.navCtrl.pop();
  }

}
