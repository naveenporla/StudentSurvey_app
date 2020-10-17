import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import { Router } from '@angular/router';

@Component({
  selector: 'app-acknowledge',
  templateUrl: './acknowledge.component.html',
  styleUrls: ['./acknowledge.component.css']
})
export class AcknowledgeComponent implements OnInit {

  mean = null;
  stdDev = null;
  list = null;


  constructor(private http: HttpClient, private router: Router) { 
    this.mean = this.router.getCurrentNavigation().extras.state.mean;
    this.stdDev = this.router.getCurrentNavigation().extras.state.std
  }

  onClick(param){

    console.log("param is:"+param);
    this.router.navigate(['/readSurvey'],{ state: { studentid: param } });
  }
  

  ngOnInit(): void {
    this.http.get<any>("http://localhost:8080/ApiTesting1/rest/api/getStudentsID").subscribe(data => {
    this.list = data;
    })
  }

}
