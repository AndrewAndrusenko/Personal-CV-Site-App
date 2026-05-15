import { CommonModule, NgOptimizedImage, ViewportScroller } from '@angular/common';
import { Component, Input } from '@angular/core';
import { AppTypingAnimationComponent } from '../typing-animation/typing-animation.component';
import { MatIconModule } from '@angular/material/icon';
interface IProjects {
    id:number,
    title:string,
    icon:string,
    bullets:string[]
}
@Component({
    selector: 'app-about-section',
    templateUrl: './about-section.component.html',
    styleUrls: ['./about-section.component.scss'],
    imports:[
        MatIconModule,
        CommonModule,
        NgOptimizedImage,
        AppTypingAnimationComponent
    ]
})
export class AboutSectionComponent {
    public projectsData:IProjects[] = []
    constructor (private viewportScroller:ViewportScroller) {
        this.projectsData = [
            {
                id:1,
                title:'Business Process & Electronic Document Management System',
                icon:'briefcase-4-fill',
                bullets:[
                    'Deleveloped in-house interactive data visualization library',
                    'Library covers business processes, contracts diagrams and provides functionality to manage these objects',
                    'Implemented new UI, design model, best practices. And more..'
                ]
            },
            {
                id:2,
                title:'Asset Management Platform',
                icon:'coins-fill',
                bullets:[
                    'Ready-to-go asset management system from scratch',
                    'Comprehensive financial accounting system',
                    'Full-scale asset management model. And more..'
                ]
            },
            {
                id:3,
                title:'Stock quotes in real time',
                icon:'exchange-box-fill',
                bullets:[
                    'A real-time processing system with a stream rate of 50 ms',
                    'Stream management with RxJS buffering, refresh rate settings',
                    'WebSockets. Rendering optimization. And more..'
                ]
            },
            {
                id:4,
                title:'Flexible JWT authentication server',
                icon:'lock-password-fill',
                bullets:[
                    'The access and refresh token pattern',
                    'Easily connecting to other applications. And more..',
                ]
            },
        ]
   }
  ngOnInit(): void {
    let offset = (window.innerHeight<600? 40 : 30)
    let i = 1/(100 / document.documentElement.clientHeight)* offset
  }
  navigateToSection(anchor:string):void {
    this.viewportScroller.scrollToAnchor(anchor);
  }
}
