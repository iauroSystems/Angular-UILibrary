import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'project-details-services-cards',
  templateUrl: './project-details-services-cards.component.html',
  styleUrls: ['./project-details-services-cards.component.scss']
})
export class ProjectDetailsServicesCardsComponent implements OnInit {

  @Input() serviceCardHeight: string;
  @Input() serviceCardWidth: string;
  @Input() serviceCardBackgroundColor: string;
  @Input() serviceCardBorderRadius: string;
  @Input() key: string;
  @Input() project_name: string;
  @Input() project_type: string;
  @Input() description: string;
  @Input() jenkinsURL: string;
  @Input() gitlabURL: string;

  constructor() { }

  ngOnInit(): void {
  }

  openjenkins(){
    window.open( ("https://ops.iauro.co:30570/job/" + this.jenkinsURL) , '_blank');
  }
  openGit(){
    window.open(this.gitlabURL, '_blank');
  }

}
