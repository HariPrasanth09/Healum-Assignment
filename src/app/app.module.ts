import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotesComponent } from './notes/notes.component';
import { ArticleNoteComponent } from './article-note/article-note.component';
import { PictureNotesComponent } from './picture-notes/picture-notes.component';
import { DocumentNotesComponent } from './document-notes/document-notes.component';
import { NotesCommonComponent } from './notes-common/notes-common.component';
import { AllNotesComponent } from './all-notes/all-notes.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { reducers } from './store/app.reducer';
import { PublishNotesComponent } from './publish-notes/publish-notes.component';

@NgModule({
  declarations: [
    AppComponent,
    NotesComponent,
    ArticleNoteComponent,
    PictureNotesComponent,
    DocumentNotesComponent,
    NotesCommonComponent,
    AllNotesComponent,
    PublishNotesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
