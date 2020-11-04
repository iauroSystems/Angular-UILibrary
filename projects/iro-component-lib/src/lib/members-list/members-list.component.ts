import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'members-list',
  templateUrl: './members-list.component.html',
  styleUrls: ['./members-list.component.scss']
})
export class MembersListComponent implements OnInit {

  @Input() memberName: string;
  @Input() memberEmail: string;
  @Input() memberProfilePhoto: string;

  constructor() { }

  ngOnInit(): void {
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
