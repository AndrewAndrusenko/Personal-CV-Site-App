import { Component } from '@angular/core';
import { CommService, languages } from '../comm.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-skills-box',
  templateUrl: './skills-box.component.html',
  styleUrls: ['./skills-box.component.scss']
})
export class SkillsBoxComponent {
  lang:languages=languages.ENGLISH;
  public readonly languages : typeof languages = languages;
  private subs = new Subscription ()
  constructor(
    private comm:CommService
  ) { }
  ngOnInit(): void {
    this.subs.add(this.comm.langSub.subscribe(lang=>this.lang=lang))
  }
  ngOnDestroy(): void {
    this.subs.unsubscribe()
  }
}
