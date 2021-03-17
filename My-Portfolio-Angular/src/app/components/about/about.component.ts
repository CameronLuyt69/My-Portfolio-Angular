import { Component, OnInit } from '@angular/core';
import { ResumeDataService } from '../../services/resume-data.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

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
