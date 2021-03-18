import { Component, OnInit, ViewChild } from '@angular/core';
import { ResumeDataService } from '../../services/resume-data.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  @ViewChild('overlay') overlay: any;

  resumeData: any;
  
  constructor(private resumeDataServise: ResumeDataService) { }

  ngOnInit(): void {
    this.getResumeData()
  }
  ngAfterViewInit() {
    this.displayOverlay()
    // console.log(this.overlay)

  }

  displayOverlay(): void {
    let el = this.overlay;
    el.addClass("op");
  }
  getResumeData(): void {
    this.resumeDataServise.getResumeData()
    .subscribe(resumeData => this.resumeData = resumeData);
  }
}
