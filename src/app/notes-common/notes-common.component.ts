import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-notes-common',
  templateUrl: './notes-common.component.html',
  styleUrls: ['./notes-common.component.css']
})
export class NotesCommonComponent implements OnInit {
  @ViewChild('title', { static: false }) title: ElementRef;
  @ViewChild('description', { static : false }) description: ElementRef;
  constructor() { }

  ngOnInit(): void {
  }

}
