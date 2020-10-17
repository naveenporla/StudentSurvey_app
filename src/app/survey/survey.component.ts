import { Component, OnInit } from '@angular/core';

import {HttpClient, HttpHeaders} from "@angular/common/http";
import { Router } from '@angular/router';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css']
})
export class SurveyComponent implements OnInit {
  record:any = {}
  likemost:any = {}
  url = "http://localhost:8080/ApiTesting1/rest/api/putRecord"
  
  constructor(private http: HttpClient, private router: Router) {
  }

  
 ngOnInit(): void {
 }

 httpOptions = {
   headers: new HttpHeaders({ 'Content-Type': 'application/json' })
 };

 onSubmit(form){
   if(form.valid)
   {
    this.record.likemost = Object.keys(this.likemost).filter((k:any) => this.likemost[k]).toString();
    this.http.post<any>(this.url,this.record,this.httpOptions).subscribe(data=>{
    if(data[0]>90)
    {
     this.router.navigate(['/winnerAck'],{ state: { mean: data[0],std:data[1] } });
    }
    else if(data[0]<90)
    {
     this.router.navigate(['/acknowledge'],{ state: { mean: data[0],std:data[1] } });
    }
    });
   }
   else{
     alert("Required fields must be entered");
   }

 }
}
