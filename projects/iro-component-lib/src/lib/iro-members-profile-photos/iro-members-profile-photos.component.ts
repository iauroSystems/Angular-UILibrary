import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'iro-members-profile-photos',
  templateUrl: './iro-members-profile-photos.component.html',
  styleUrls: ['./iro-members-profile-photos.component.scss']
})
export class IroMembersProfilePhotosComponent implements OnInit {

  @Input() membersList;
  @Output() selectedMember = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }


  users = [];
  userSelected(user){
    if(this.users.length == 0){
      this.users.push(user); 
      this.selectedMember.emit(user); 
    }
    else if(this.users.indexOf(user) != -1){
      this.users=[];
      this.selectedMember.emit(null); 
    }
    else{
      this.users=[];
      this.users.push(user);
      this.selectedMember.emit(user); 
    }
  }


}
