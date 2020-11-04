import { Component, OnInit, Input } from '@angular/core';

import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'project-details-project-manager-card',
  templateUrl: './project-details-project-manager-card.component.html',
  styleUrls: ['./project-details-project-manager-card.component.scss']
})
export class ProjectDetailsProjectManagerCardComponent implements OnInit {

  @Input() projectDetailsProjectManagerCardName: string;
  @Input() projectDetailsProjectManagerCardEmail: string;
  @Input() projectDetailsProjectManagerCardProfilePhoto: string;
  @Input() projectDetailsProjectManagerCardJiraUsername: string;
  @Input() projectDetailsProjectManagerCardGitUsername: string;
  @Input() projectDetailsProjectManagerCardOpenjira: string;
  @Input() projectDetailsProjectManagerCardDeploymentURL: string;


  constructor(private snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  openDeploymentURL() {
    window.open(this.projectDetailsProjectManagerCardDeploymentURL, '_blank');
  }

  copyServiceKeyToClipBoard(key){
    let selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = key;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);

    this.snackBar.open('Copied to Clipboard','',{duration:1500})
  }

  openJira() {
    window.open(this.projectDetailsProjectManagerCardOpenjira, '_blank');
  }

  getInitial(name){
    let list = name.split(' ');
    if (list.length < 2){
      if(name[0]){
        return name[0].toUpperCase() || ""
      }
    }
    if(list[0][0] && list[1][0]){
      return list[0][0].toUpperCase()+ " " + list[1][0].toUpperCase(); 
    }
  }

}
