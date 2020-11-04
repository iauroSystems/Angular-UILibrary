import {CommonModule} from '@angular/common'
import { NgModule } from '@angular/core';
import { ProjectDetailsServicesCardsComponent } from './project-details-services-cards.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [ProjectDetailsServicesCardsComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatButtonModule
  ],
  exports:  [ProjectDetailsServicesCardsComponent]
})
export class ProjectDetailsServicesCardsModule { }
