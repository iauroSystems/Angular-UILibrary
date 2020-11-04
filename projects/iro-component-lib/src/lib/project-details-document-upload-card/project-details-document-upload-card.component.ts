import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'project-details-document-upload-card',
  templateUrl: './project-details-document-upload-card.component.html',
  styleUrls: ['./project-details-document-upload-card.component.scss']
})
export class ProjectDetailsDocumentUploadCardComponent implements OnInit {

  @Input() projectDetailsDocumentUploadCardWorkFlow: string;
  @Input() projectDetailsDocumentUploadCardMaxWorkFlow: string;

  constructor() { }

  ngOnInit(): void {
  }

}
