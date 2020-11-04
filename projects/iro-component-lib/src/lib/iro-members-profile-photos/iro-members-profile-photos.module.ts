import {CommonModule} from '@angular/common'
import { NgModule } from '@angular/core';
import { IroMembersProfilePhotosComponent } from './iro-members-profile-photos.component';

import {MatTooltipModule} from '@angular/material/tooltip';

@NgModule({
  declarations: [IroMembersProfilePhotosComponent],
  imports: [
    CommonModule,
    MatTooltipModule
  ],

  exports:  [IroMembersProfilePhotosComponent]
})
export class IroMembersProfilePhotosModule { }
