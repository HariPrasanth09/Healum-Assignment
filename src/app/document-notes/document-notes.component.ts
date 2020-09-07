import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NotesCommonComponent } from '../notes-common/notes-common.component';
import { NotesService } from '../notes.service';

@Component({
  selector: 'app-document-notes',
  templateUrl: './document-notes.component.html',
  styleUrls: ['./document-notes.component.css'],
})
export class DocumentNotesComponent implements OnInit {
  @ViewChild('notes', { static: false }) notes: NotesCommonComponent;
  @ViewChild('documentType', { static: false }) documentType: ElementRef;

  constructor(private notesService: NotesService) {}

  ngOnInit(): void {}
  saveNotes() {
    this.notesService.documentNotes.push({
      'title': this.notes.title.nativeElement.value,
      'description': this.notes.description.nativeElement.value,
      'documentType': this.documentType.nativeElement.value
    });
    this.notes.title.nativeElement.value = '';
    this.notes.description.nativeElement.value = '';
    this.documentType.nativeElement.value = '';
    //console.log(this.notesService.documentNotes);
  }
}
