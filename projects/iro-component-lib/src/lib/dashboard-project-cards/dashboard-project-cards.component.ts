import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'dashboard-project-cards',
  templateUrl: './dashboard-project-cards.component.html',
  styleUrls: ['./dashboard-project-cards.component.scss']
})
export class DashboardProjectCardsComponent implements OnInit {

  @Input() createProject: string;
  @Input() projectCardHeight: string;
  @Input() projectCardWidth: string;
  @Input() projectCardBackgroundColor: string;
  @Input() projectCardBorderRadius: string;
  @Input() projectId: string;
  @Input() ragStatus: string;
  @Input() projectName: string;
  @Input() projectdescription: string;
  @Input() dataLead: string;
  @Input() profilePhotoUrl: string;

  constructor() { }

  ngOnInit(): void {
    console.log(this.ragStatus);
    
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
