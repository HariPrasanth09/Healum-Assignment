import { Component, OnInit } from '@angular/core';
import { NotesService } from '../notes.service';
import { Store } from '@ngrx/store';
import { AppState } from '../store/app.state';
@Component({
  selector: 'app-all-notes',
  templateUrl: './all-notes.component.html',
  styleUrls: ['./all-notes.component.css']
})
export class AllNotesComponent implements OnInit {

  constructor(public store: Store<AppState>,public notesService:NotesService) { 
    console.log(this.store.select(state => state.ui.description));
  }

  ngOnInit(): void {
  }

}
