import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { RESUMEDATA } from '../resume-data';

@Injectable({
  providedIn: 'root'
})
export class ResumeDataService {

  constructor() { }

  getResumeData(): Observable<any> {
    const resumeData = of(RESUMEDATA);
    return resumeData;
  }
}
