import {CommonModule} from '@angular/common'
import { NgModule } from '@angular/core';
import { MembersListComponent } from './members-list.component';

import {FlexLayoutModule} from '@angular/flex-layout';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [MembersListComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatButtonModule
  ],
  exports:  [MembersListComponent]
})
export class MembersListModule { }
