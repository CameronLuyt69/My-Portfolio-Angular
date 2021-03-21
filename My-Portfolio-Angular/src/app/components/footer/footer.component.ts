import { Component, OnInit } from '@angular/core';
import { ResumeDataService } from '../../services/resume-data.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

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
