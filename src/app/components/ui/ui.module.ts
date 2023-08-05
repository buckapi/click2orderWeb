import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavHeaderComponent } from './navHeader/nav-header/nav-header.component';
import { DashboardHeaderComponent } from './dashboardHeader/dashboard-header/dashboard-header.component';
import { DezNavComponent } from './dezNav/dez-nav/dez-nav.component';
import { DashboardFooterComponent } from './dashboardFooter/dashboard-footer/dashboard-footer.component';



@NgModule({
  declarations: [
    NavHeaderComponent,
    DashboardHeaderComponent,
    DezNavComponent,
    DashboardFooterComponent
  ],
  imports: [
    CommonModule
  ],
  providers:[

  ],
  exports:[
    NavHeaderComponent,DashboardHeaderComponent,DezNavComponent,DashboardFooterComponent
  ],
})
export class UiModule { }
