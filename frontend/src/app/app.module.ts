import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from "@angular/flex-layout";
import { MaterialModule } from './shared/material/material.module';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CalenderComponent } from './components/calender/calender.component';
import { RegistrationComponent } from './components/user/registration/registration.component';
import { RepeatExamComponent } from './components/user/repeat-exam/repeat-exam.component';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { ServiceModule } from './shared/service/service.module';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminLoginComponent,
    NavbarComponent,
    CalenderComponent,
    RegistrationComponent,
    RepeatExamComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ServiceModule.forRoot(),
    FlexLayoutModule
  ],
  exports:[
  ],
  entryComponents: [ LoginComponent,RegistrationComponent, RepeatExamComponent],
  providers: [  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
