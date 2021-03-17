import { Component, OnInit } from '@angular/core';
import { ResumeDataService } from '../../services/resume-data.service';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {

  resumeData: any;
  
  constructor(private resumeDataServise: ResumeDataService) { }

  ngOnInit(): void {
    this.getResumeData()
  }

  getResumeData(): void {
    this.resumeDataServise.getResumeData()
    .subscribe(resumeData => this.resumeData = resumeData);
  }
}
