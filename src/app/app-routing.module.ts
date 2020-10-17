import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WinnerAckListComponent} from './winner-ack-list/winner-ack-list.component';
import { SurveyComponent} from './survey/survey.component';
import { AcknowledgeComponent } from './acknowledge/acknowledge.component';
import { ReadSurveyComponent } from './read-survey/read-survey.component';


const routes: Routes = [{path: 'winnerAck', component: WinnerAckListComponent},
{path: '', component: SurveyComponent},
{path: 'acknowledge', component: AcknowledgeComponent},
{path: 'readSurvey', component: ReadSurveyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
