import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'project-details-project-card',
  templateUrl: './project-details-project-card.component.html',
  styleUrls: ['./project-details-project-card.component.scss']
})
export class ProjectDetailsProjectCardComponent implements OnInit {

  @Input() projectDetailsProjectId: string;
  @Input() projectDetailsProjectName: string;
  @Input() projectDetailsDescription: string;
  @Input() projectDetailsdeploymentURL: string;
  @Input() projectDetailsCardHeight: string;
  @Input() projectDetailsCardWidth: string;
  @Input() projectDetailsCardBackgroundColor: string;
  @Input() projectDetailsBorderRadius: string;

  constructor() { }

  ngOnInit(): void {
  }

  openDeploymentURL() {
    window.open(this.projectDetailsdeploymentURL, '_blank');
  }

  editProjectDescription(){
    // const dialogRef = this.dialog.open(SingleInputComponent,{width:'40%',data:{dialogData: {header: 'Project Deployment URL',label: 'Project Deployment URL' ,error:'Enter Project Deployment URL', link: this.projectInfo.deployment_url}}});
    //   const sub = dialogRef.componentInstance.dialogData.subscribe((data)=>{
    //     console.log("Project desc:",data);
    //     this.updateProjectDescription(data);
    // })
    // dialogRef.afterClosed().subscribe(result=>{
    //   sub.unsubscribe();
    // })
  }


}
