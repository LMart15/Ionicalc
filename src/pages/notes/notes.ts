import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TranslateService } from 'ng2-translate';
import { LanguageService } from "../../service/language.service";
import { NotesDetailPage } from "../notes-detail/notes-detail";
import { Note } from "../../model/notes.model";
import {AngularFire, FirebaseListObservable} from 'angularfire2';
import { SocialSharing } from '@ionic-native/social-sharing';

@Component({
  selector: 'page-notes',
  templateUrl: 'notes.html'
})
export class NotesPage {

  //notes: Note[];
  notes: FirebaseListObservable<any>;
  shareEmail:string = "lawrenceqmartin@gmail.com";

  constructor(private navCtrl: NavController, private navParams: NavParams, private translateService: TranslateService, private languageService: LanguageService, af: AngularFire, private socialSharing: SocialSharing) {
    translateService.use(languageService.lang);
    
    //this.notes = noteService.notes;
    this.notes = af.database.list('/notes');
    console.log(this.notes);
  } 

  onNotePress(noteId: String){
    this.navCtrl.push(NotesDetailPage, {noteId: noteId});
  };

  onAddClick(note: Note){
    this.navCtrl.push(NotesDetailPage);
  };

  onTrashClick(key: string){
    this.notes.remove(key);
  };

  onShareClick(note: Note){
    
      this.socialSharing.canShareViaEmail().then(() => {
        // Sharing via email is possible
          
      }).catch(() => {
        // Sharing via email is not possible
        alert("no email");
      });

// Share via email
this.socialSharing.shareViaEmail(note.note, note.title, ['lawrenceqmartin@gmail.com']).then(() => {
  // Success!
}).catch(() => {
  // Error!
});

  };

}


