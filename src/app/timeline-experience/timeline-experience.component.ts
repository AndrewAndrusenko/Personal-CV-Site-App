import { CommonModule } from '@angular/common';
import { Component} from '@angular/core';
import { AppIntersectDirective } from '../directives/intersect-view.directive';
interface IExperience {
    company:string,
    logo:string,
    logo_backgroud?:string,
    padding?:string,
    position:string,
    period:string,
    period2?:string,
    bullets:string[]
}
@Component({
    selector: 'app-timeline-experience',
    templateUrl: './timeline-experience.component.html',
    styleUrls: ['./timeline-experience.component.scss'],
    imports:[CommonModule, AppIntersectDirective],
    standalone: true
})
export class TimelineExperienceComponent {
    public expData:IExperience[]
    constructor() {
        this.expData = [
            {
                company:'System Solutions',
                logo:'pro.svg',
                logo_backgroud:'#ffffff',
                padding:'2px',
                position:'Senior Frontend/FullStack Engineer',
                period:'02/2025 - Present',
                period2:'2025 - Present',
                bullets:[
                    'Interactive data visualization and management of business process diagrams and contracts. Creating an in-house library based on Konva (graphics), Elk and Dagre (graph layout)',
                    'Implementing new design model with refactoring and integrating best practices (rxjs,  standalone, defer import)',
                    'Performance optimization: bundle size (one chunk 10mb => 5.5 of small chunks => 1.5mb via Brotli compressing) , lazy loading,  data memorization, rendering ',
                    'Detecting and resolving memory leaks',
                    'Real-Time processing system for stock quotes. Frequency is up to 50 milliseconds. WebSockets. Page rendering optimization. RxJS streams with buffering and refresh settings. Server states handling',
                    'Flexible JWT authentication server. The access + refresh token pattern. Seamless renewal of the expired token. Easily connecting to other applications. The admin panel. Redis caching. Detailed logs'
                ]
            },
            {
                company:'3A Solutions Inc',
                logo:'3A.png',
                logo_backgroud:'#add8e6',
                position:'Full Stack Developer',
                period:'2023 - 02/2025',
                period2:'2023 - 2025',
                bullets:[
                    'Developed a decoupled, scalable, ready-to-go asset management application platform from scratch',
                    'Implemented full-scale asset management model:Model Portfolios, Strategies, Orders, Balance, Trades, Portfolios, Accounts, Investment Restrictions, Performance and Management Fees (hwm, sliding scales), Portfolio returns analysis (time-weighed rate of return, pl factor analysis)',
                    'Implemented a comprehensive financial accounting system',
                    'Built RESTful API architecture using NodeJs (Express) layer',
                    'Created frontend using Angular, Material Design and RxJS. Wrote unit tests using Jest',
                    'Built an effectively structured PostgresSQL DB and created functions to perform complex calculations'
                ]
            },
            {
                company:'BNP Paribas',
                logo:'BNP.png',
                position:'Middle Frontend Engineer',
                period:'2021 - 2023',
                bullets:[
                    'Created BackOffice Dashboard. Flexible UI to get live customized data regarding trades and payments in order to process them duly and timely (Web UI vanilla - Node JS - SQL Server)',
                    'Developed a tax suspension verification service for clients applying for deposits (Browser Automation - Scripting)',
                    'Developed a module to track the document flow for trades’ confirmations. User-friendly interface for status management and reconciliation functionality'
                ]
            },
            {
                company:'Own Asset Portfolio Inc',
                logo:'OWN.png',
                position:'Private Investor',
                period:'2016 - 2021',
                bullets:[
                    'Managed my own investment portfolio using various products through brokerage account and collective investments',
                    'Self-education and development in financial markets',
                ]
            },
            {
                company:'Renaissance Investment Management',
                logo:'RIM RND.png',
                position:'Head of Operations and Support Department',
                period:'2006 - 2011',
                bullets:[
                    '2 middle office platforms were launched to ensure consecutive growth of the private client asset management business',
                    'Developed an additional module for the first middle-office platform, which allowed it to be launched on time. The module was a crucial part and was constantly being developed in accordance with business demands',
                ]
            },
        ]
    }
}