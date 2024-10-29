import { Component, ElementRef, HostListener, QueryList, ViewChildren } from '@angular/core';
import { Subscription } from 'rxjs';
import { CommService, languages } from '../comm.service';

@Component({
  selector: 'app-timeline-experience',
  templateUrl: './timeline-experience.component.html',
  styleUrls: ['./timeline-experience.component.scss']
})
export class TimelineExperienceComponent {
  lang:languages=languages.ENGLISH;
  public readonly languages : typeof languages = languages;
  private subs = new Subscription()
  @ViewChildren ('animated') expBox :QueryList<ElementRef>
  @ViewChildren ('aicon') aicons :QueryList<ElementRef>
  @HostListener('document:scroll',['event'])
    onScrollReveal(event: Event) {  
      this.expBox.forEach (el=>{
      let elTop = el.nativeElement.getBoundingClientRect().top
      window.innerHeight -150 > elTop ? el.nativeElement.classList.add('active-box'):el.nativeElement.classList.remove('active-box')
      })
      this.aicons.forEach (el=>{
      let elTop = el.nativeElement.getBoundingClientRect().top
      window.innerHeight -150 > elTop ? el.nativeElement.classList.add('active-img'):el.nativeElement.classList.remove('active-img')
      })
    }
  constructor(
    private comm:CommService
  ) { }
  ngOnInit(): void {
    this.subs.add(this.comm.langSub.subscribe(lang=>this.lang=lang))
  }
  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
