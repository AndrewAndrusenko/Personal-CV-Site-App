import { ViewportScroller } from '@angular/common';
import { Component, Input } from '@angular/core';
import { CommService, languages } from '../comm.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-about-section',
  templateUrl: './about-section.component.html',
  styleUrls: ['./about-section.component.scss']
})
export class AboutSectionComponent {
  @Input() deviceType:string;
  lang:languages=languages.ENGLISH;
  public readonly languages : typeof languages = languages;
  private subs = new Subscription ()
   constructor (
    private viewportScroller:ViewportScroller,
    private comm:CommService
   ){}
  ngOnInit(): void {
    let offset = (window.innerHeight<600? 40 : 30)
    let i = 1/(100 / document.documentElement.clientHeight)* offset
    this.subs.add(this.comm.langSub.subscribe(lang=>{this.lang=lang}))
  }
  navigateToSection(anchor:string):void {
    this.viewportScroller.scrollToAnchor(anchor);
  }
  ngOnDestroy(): void {
    this.subs.unsubscribe();    
  }
}
