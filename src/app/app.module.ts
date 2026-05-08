import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule} from '@angular/material/icon'
import { MatMenuModule} from '@angular/material/menu';
import { MatButtonModule} from '@angular/material/button';
import { SkillsBoxComponent } from './skills-box/skills-box.component';
import { AboutSectionComponent } from './about-section/about-section.component';
import { TypingAnimationComponent } from './typing-animation/typing-animation.component';
import { TimelineExperienceComponent } from './timeline-experience/timeline-experience.component';
import { ContactMeFormComponent } from './contact-me-form/contact-me-form.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule} from '@angular/material/form-field'; 
import { MatInputModule } from '@angular/material/input'; 
import { MatTooltipModule} from '@angular/material/tooltip';
import {MatSnackBarModule} from '@angular/material/snack-bar'; 
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { AamCoreInfoComponent } from './aam-core-info/aam-core-info.component';
import { BpProcessChartsComponent } from './bp-process-charts/bp-process-charts.component';
import { FooterContactComponent } from './footer-contact/footer-contact.component';
import { AppIntersectDirective } from './directives/intersect-view.directive';

@NgModule({ declarations: [
        AppComponent,
        MainMenuComponent,
        SkillsBoxComponent,
        AboutSectionComponent,
        TypingAnimationComponent,
        ContactMeFormComponent,
        AamCoreInfoComponent,
        BpProcessChartsComponent,
        FooterContactComponent
    ],
    bootstrap: [AppComponent], 
    imports: [
        BrowserModule,
        TimelineExperienceComponent,
        AppIntersectDirective,
        AppRoutingModule,
        MatToolbarModule,
        MatIconModule,
        MatMenuModule,
        MatButtonModule,
        ReactiveFormsModule,
        FormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatTooltipModule,
        MatSnackBarModule], providers: [provideHttpClient(withInterceptorsFromDi())] })
export class AppModule { }
