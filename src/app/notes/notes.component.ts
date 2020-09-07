import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NotesService } from '../notes.service';
import { Store } from '@ngrx/store';
import { AppState } from '../store/app.state';
import {notesChangedAction} from '../store/UI/ui.actions'
@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css'],
})
export class NotesComponent implements OnInit {
  @ViewChild('description') description: ElementRef;
  
  //constructor(private notesService: NotesService) {}
  constructor(private store: Store<AppState>) {
    
}

  ngOnInit(): void {}

  saveNotes() {
  
    this.store.dispatch(new notesChangedAction(this.description.nativeElement.value));
  }
}
