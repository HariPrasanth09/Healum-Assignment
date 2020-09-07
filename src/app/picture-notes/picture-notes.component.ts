import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NotesCommonComponent } from '../notes-common/notes-common.component';
import { NotesService } from '../notes.service';

@Component({
  selector: 'app-picture-notes',
  templateUrl: './picture-notes.component.html',
  styleUrls: ['./picture-notes.component.css'],
})
export class PictureNotesComponent implements OnInit {
  @ViewChild('notes', { static: false }) notes: NotesCommonComponent;
  @ViewChild('img', { static: false }) image:ElementRef;
  constructor(private notesService: NotesService) {}

  ngOnInit(): void {}

  saveNotes() {
    this.notesService.pictureNotes.push({
      'title':this.notes.title.nativeElement.value,
      'description':this.notes.description.nativeElement.value,
      'img': this.image.nativeElement.value
    });
    this.notes.title.nativeElement.value = '';
    this.notes.description.nativeElement.value = '';
    this.image.nativeElement.value = '';
    //console.log(this.notesService.pictureNotes);
  }
}
