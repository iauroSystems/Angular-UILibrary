**Component Library**
---------------------

 * **Introduction**
    aur-ops Component Library allow to use Components in actual aur-ops front-end.

 * **Technologies**:
    Angular - Library is created with angular-cli version 9.1.7

 * **Usage**:
 
    1.create new component
    
    2.create module file:    
        Add new module file(containing all modules required for this component).
    
    3.Export this component module in public-api.ts     
    
    4.Build the library from root folder
        Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. 
        Use the `--prod` flag for a production build.
        i.e. ng build iro-component-lib --prod

    5.Install the new lib:  
        npm install path_component_library_presentIn_dist_folder
    
    6.Import component library in app.module 
    
    7.Use the selector in the html file to use the Particular component of component library.

 * **Example**:

    1.create new component:
        ng generate component dashboard-project-card

    2.create module file    
        Add new module file(containing all modules required for this component).
        e.g. dashboard-project-card.module.ts

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


    3.Export this component module in public-api.ts     
        
        e.g.   export * from './lib/dashboard-project-cards/dashboard-project-cards.module';

    4.Build the library from root folder
        Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. 
        Use the `--prod` flag for a production build.
    
        e.g.  ng build iro-component-lib --prod

    5.Install the new lib:  
        npm install path_component_library_presentIn_dist_folder
    
        e.g.  npm install ../iro-lib-workspace/dist/iro-component-lib

    6.Import component library in app.module
    
        e.g.  import { DashboardProjectCardsModule } from 'iro-component-lib';
 
    7.Use the selector in the html file to use the Particular component of component library.
    
        e.g.
        <dashboard-project-cards projectId="12345678" projectName="Hello World" 
            projectdescription="" dataLead="Jon Doe" [profilePhotoUrl]="profile_photo_url"  
            projectCardHeight="140px" projectCardWidth="260px" projectCardBackgroundColor="white" 
            projectCardBorderRadius="5px" ragStatus='RED' > </dashboard-project-cards>

