import { CommonModule, ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
@Component({
    selector: 'app-main-menu',
    templateUrl: './main-menu.component.html',
    styleUrls: ['./main-menu.component.scss'],
    imports:[CommonModule, MatIconModule],
    standalone: true
})
export class MainMenuComponent {
  myName:string="<Andrey/Andrusenko>"
  constructor(
    private viewportScroller:ViewportScroller) 
    { }
  ngOnInit(): void {
    let offset = (window.innerHeight<600? 40 : 30)
    let i = 1/(100 / document.documentElement.clientHeight)* offset
    this.viewportScroller.setOffset([1,i])
  }
  navigateToSection(anchor:string):void {
    this.viewportScroller.scrollToAnchor(anchor);
  }
  openPDF (url:string) {
    window.open(url,'_blank')
  }
}

