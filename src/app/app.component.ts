import { Component} from '@angular/core';
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { AboutSectionComponent } from './components/about-section/about-section.component';
import { AppIntersectDirective } from './directives/intersect-view.directive';
import { SkillsBoxComponent } from './components/skills-box/skills-box.component';
import { TimelineExperienceComponent } from './components/timeline-experience/timeline-experience.component';
import { AamCoreInfoComponent } from './components/aam-core-info/aam-core-info.component';
import { BpProcessChartsComponent } from './components/bp-process-charts/bp-process-charts.component';
import { ContactMeFormComponent } from './components/contact-me-form/contact-me-form.component';
import { FooterContactComponent } from './components/footer-contact/footer-contact.component';
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    imports: [
        MainMenuComponent, 
        AboutSectionComponent, 
        AppIntersectDirective, 
        SkillsBoxComponent, 
        TimelineExperienceComponent, 
        AamCoreInfoComponent, 
        BpProcessChartsComponent, 
        ContactMeFormComponent, 
        FooterContactComponent
    ]
})
export class AppComponent 
{
  public deviceType:string = ''
  public viewArea = '150px 0px 0px 0px'
}