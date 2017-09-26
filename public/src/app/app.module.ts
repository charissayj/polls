//Modules
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';

//services
import { PollService } from './services/poll.service';
import { UserService } from './services/user.service';

//components
import { AppComponent } from './app.component';
import { CreateComponent } from './create/create.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { PollComponent } from './poll/poll.component';
import { PollsComponent } from './dashboard/polls/polls.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateComponent,
    DashboardComponent,
    LoginComponent,
    PollComponent,
    PollsComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpModule,
  ],
  providers: [
    PollService,
    UserService, 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
