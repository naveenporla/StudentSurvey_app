import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule,ReactiveFormsModule}  from '@angular/forms'
import { AppComponent } from './app.component';
import { SurveyComponent } from './survey/survey.component';
import { HttpClientModule }    from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { WinnerAckListComponent } from './winner-ack-list/winner-ack-list.component';
import { AcknowledgeComponent } from './acknowledge/acknowledge.component';
import { ReadSurveyComponent } from './read-survey/read-survey.component';


@NgModule({
  declarations: [
    AppComponent,
    SurveyComponent,
    WinnerAckListComponent,
    AcknowledgeComponent,
    ReadSurveyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
