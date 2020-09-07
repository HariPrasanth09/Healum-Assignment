import { Component, OnInit, ViewChild } from '@angular/core';
import { NotesCommonComponent } from '../notes-common/notes-common.component';
import { NotesService } from '../notes.service';

@Component({
  selector: 'app-article-note',
  templateUrl: './article-note.component.html',
  styleUrls: ['./article-note.component.css'],
})
export class ArticleNoteComponent implements OnInit {
  @ViewChild('notes') notes: NotesCommonComponent;
  constructor(private notesService: NotesService) {}

  ngOnInit(): void {}

  saveNotes() {
    this.notesService.articleNotes.push({
      title: this.notes.title.nativeElement.value,
      description: this.notes.description.nativeElement.value,
    });
    this.notes.title.nativeElement.value = '';
    this.notes.description.nativeElement.value = '';
    //console.log(this.notesService.articleNotes);
  }
}
