import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotesCommonComponent } from './notes-common.component';

describe('NotesCommonComponent', () => {
  let component: NotesCommonComponent;
  let fixture: ComponentFixture<NotesCommonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotesCommonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotesCommonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
