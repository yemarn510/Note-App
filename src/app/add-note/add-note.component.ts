import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NoteService } from '../utility/note.service';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.css']
})
export class AddNoteComponent implements OnInit {

  constructor(
    private noteService : NoteService,
  ) { }

  ngOnInit(): void {
  }

  addNote(noteTitle : String){
    if(noteTitle.length != 0)
    {
      this.noteService.addNote(noteTitle);
    }
    
  }

}
