import { Component, OnInit } from '@angular/core';
import { NoteService } from '../utility/note.service';
import { CloseScrollStrategy } from '@angular/cdk/overlay';
@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.css']
})
export class NoteListComponent implements OnInit {

  noteList : any;
  aNote : any;
  constructor(
    private noteService : NoteService,
  ) { }

  ngOnInit(): void {
    this.noteService.getNotes().subscribe(data => this.noteList = data);
  }

  done(noteID : number){
    this.noteService.getNoteByID(noteID).subscribe(data=> this.aNote =data);
    this.aNote.status = 1;
    this.noteService.finishedTask(noteID, this.aNote);
  }

}
