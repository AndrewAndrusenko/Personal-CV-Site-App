import { CommonModule, NgOptimizedImage, ViewportScroller } from '@angular/common';
import { Component, Input } from '@angular/core';
import { AppTypingAnimationComponent } from '../typing-animation/typing-animation.component';
import { MatIconModule } from '@angular/material/icon';
interface IDemoUrl {
  url:string,
  label:string
}
interface IRepository {
    repository_private:boolean,
    repository_text?:string
    repository_url?:string,
}
interface IProjects {
    id:number,
    title:string,
    demo_urls:IDemoUrl[],
    repositories:IRepository[]
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
                demo_urls:[
                  {
                    label:'Demo Company 1 Instance',
                    url:'https://ppklrx85-5001.euw.devtunnels.ms/apps/crm1/',
                  },
                  {
                    label:'Demo Bank 2 Instance',
                    url:'https://ppklrx85-5001.euw.devtunnels.ms/apps/crm2/',
                  }
                ],
                repositories:[
                  {
                    repository_private:true,
                    repository_text:'Private (Available for live review during interviews)',
                  }
                ],
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
                demo_urls:[
                  {
                    label:'https://ppklrx85-5001.euw.devtunnels.ms/apps/aam/',
                    url:'https://ppklrx85-5001.euw.devtunnels.ms/apps/aam/',
                  }
                ],
                repositories:[
                  {
                    repository_private:true,
                    repository_text:'Private (Available for live review during interviews)',
                  }
                ],
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
                demo_urls:[
                  {
                    label:'https://ppklrx85-5001.euw.devtunnels.ms/apps/rtq/',
                    url:'https://ppklrx85-5001.euw.devtunnels.ms/apps/rtq/',
                  }
                ],
                repositories:[
                  {
                    repository_private:false,
                    repository_text:'Main - Frontend-RealTime-StockQuotes-WSS',
                    repository_url:'https://github.com/AndrewAndrusenko/RealTime-StockQuotes-WSS-Frontend',
                  },
                  {
                    repository_private:false,
                    repository_text:'Supporting - Backend-RealTime-StockQuotes-WSS',
                    repository_url:'https://github.com/AndrewAndrusenko/RealTime-StockQuotes-WS-Backend'
                  },

                ],
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
                demo_urls:[
                  {
                    label:'https://ppklrx85-5001.euw.devtunnels.ms/apps/ssngrx/',
                    url:'https://ppklrx85-5001.euw.devtunnels.ms/apps/ssngrx/',
                  }
                ],
                repositories:[
                  {
                    repository_private:false,
                    repository_text:'Auth-Server-Frontend',
                    repository_url:'https://github.com/AndrewAndrusenko/Auth-Server-Frontend',
                  },
                  {
                    repository_private:false,
                    repository_text:'Auth-Server-Backend',
                    repository_url:'https://github.com/AndrewAndrusenko/Auth-Server-Backend',
                  }
                ],
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
