import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArticleNoteComponent } from './article-note/article-note.component';
import { PictureNotesComponent } from './picture-notes/picture-notes.component';
import { DocumentNotesComponent } from './document-notes/document-notes.component';
import { NotesComponent } from './notes/notes.component';
import { AllNotesComponent } from './all-notes/all-notes.component';
import { PublishNotesComponent } from './publish-notes/publish-notes.component';

const routes: Routes = [
  { path: '', pathMatch:'full', redirectTo: '/allnotes' },
  { path: 'allnotes', component:AllNotesComponent },
  { path: 'notes', component: NotesComponent    },
  { path: 'article-notes', component: ArticleNoteComponent },
  { path: 'picture-notes',  component: PictureNotesComponent },
  { path: 'document-notes',  component: DocumentNotesComponent },
  { path: 'publish-notes',  component: PublishNotesComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  static components = [
    NotesComponent, ArticleNoteComponent, PictureNotesComponent, DocumentNotesComponent,PublishNotesComponent
  ];
}
