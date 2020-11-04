import {CommonModule} from '@angular/common'
import { NgModule } from '@angular/core';
import { DashboardProjectCardsComponent } from './dashboard-project-cards.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [DashboardProjectCardsComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatButtonModule
  ],
  exports:  [DashboardProjectCardsComponent]
})
export class DashboardProjectCardsModule { }
