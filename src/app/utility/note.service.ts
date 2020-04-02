import { Injectable } from '@angular/core';
import { Notes } from './noteList';
import { Observable, of } from 'rxjs';
import { note } from './noteObj';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  serviceNote = Notes;
  initID = 4;
  constructor() { }

  getNotes():Observable<note[]>{
    return of(this.serviceNote);
  }

  addNote(noteTitle : String){
    this.serviceNote.push(new note(this.initID, noteTitle, 0));
    this.initID = this.initID + 1;
  }
  
  getNoteByID(noteID : number){
    return of(this.serviceNote[noteID]);
  }

  finishedTask(id : number, finishedNote : note){
    this.serviceNote[id] = finishedNote;
  }
}
