import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material/material.module';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app.component';
import { DashbordComponent } from './components/dashbord/dashbord.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AdminComponent } from './components/admin/admin.component';
import { UserService } from './shared/services/user.service';
import { CalenderComponent } from './components/calender/calender.component';
import { RegistrationComponent } from './components/user/registration/registration.component';
import { DataService } from './shared/services/data.service';
import { RepeatExamComponent } from './components/user/repeat-exam/repeat-exam.component';

@NgModule({
  declarations: [
    AppComponent,
    DashbordComponent,
    LoginComponent,
    NavbarComponent,
    AdminComponent,
    CalenderComponent,
    RegistrationComponent,
    RepeatExamComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  entryComponents: [ LoginComponent,RegistrationComponent, RepeatExamComponent],
  providers: [ UserService, DataService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
