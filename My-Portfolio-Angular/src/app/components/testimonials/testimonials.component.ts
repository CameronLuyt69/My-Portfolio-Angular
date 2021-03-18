import { Component, OnInit } from '@angular/core';
import { ResumeDataService } from '../../services/resume-data.service';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css']
})
export class TestimonialsComponent implements OnInit {

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
