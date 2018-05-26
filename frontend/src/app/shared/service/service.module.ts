import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from '../service/services/user.service';
import { DataService } from '../service/services/data.service';
import { AdminService } from '../service/services/admin.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers : [
    UserService,
    DataService,
    AdminService,
  ]
})
export class ServiceModule { 
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: ServiceModule,
      providers: [
        UserService,
        DataService,
        AdminService,
      ]
    };
  }
}
