import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing/admin-routing.module';
import { SharedModule } from '../shared/shared.module';

import { AdminNavbarComponent } from './components/admin-navbar/admin-navbar.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { AdminSideNavbarComponent } from './components/admin-side-navbar/admin-side-navbar.component';
import { AdminSystemOverviewComponent } from './components/admin-system-overview/admin-system-overview.component';

@NgModule({
  declarations: [
  AdminNavbarComponent,
  AdminDashboardComponent,
  AdminSideNavbarComponent,
  AdminSystemOverviewComponent
  ],
  imports: [
    SharedModule,
    AdminRoutingModule,
    CommonModule
  ],
  exports: [
    AdminNavbarComponent,
    AdminDashboardComponent,
    AdminSideNavbarComponent
  ]
})
export class AdminModule { }
