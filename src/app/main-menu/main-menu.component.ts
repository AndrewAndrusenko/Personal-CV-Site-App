import { ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';
import { CommService, languages } from '../comm.service';
@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss']
})
export class MainMenuComponent {

  deviceType:string=''
  myName:string="<Andrey/Andrusenko>"
  lang:languages=languages.ENGLISH;
  public readonly languages : typeof languages = languages;
  constructor(
    private commService : CommService,
    private deviceService: DeviceDetectorService,
    private viewportScroller:ViewportScroller) 
    { }
  ngOnInit(): void {
    let offset = (window.innerHeight<600? 40 : 30)
    let i = 1/(100 / document.documentElement.clientHeight)* offset
    this.viewportScroller.setOffset([1,i])
    switch (true) {
      case this.deviceService.isDesktop():
          this.deviceType='Desktop'
      break;
      case this.deviceService.isMobile():
          this.deviceType='Mobile'
      break;
      case this.deviceService.isTablet():
          this.deviceType='Tablet'
      break;
      default:
        this.deviceType='Unknown'
      break;
    }
  }
  changeLang(el:HTMLSelectElement) {
      this.commService.langSub.next(this.lang = el.selectedOptions.item(0)?.id as languages)
    }
  navigateToSection(anchor:string):void {
    this.viewportScroller.scrollToAnchor(anchor);
  }
  openPDF (url:string) {
    window.open(url,'_blank')
  }
}

