import { ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatMenuModule } from '@angular/material/menu';
interface IMenu {
  label: string;
  href: string;
  target_blank?: boolean;
  icon?: string;
  handler?: (arg0: string) => void;
  arg?: string;
}
@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss'],
  imports: [MatIconModule, MatTooltipModule, MatMenuModule],
  standalone: true,
})
export class MainMenuComponent {
  public readonly menuItems: IMenu[] = [];
  constructor(private viewportScroller: ViewportScroller) {
    this.menuItems = [
      {
        label: '<Andrey/Andrusenko>',
        href: './',
        icon: 'shake-hands-fill',
        handler: this.navigateToSection,
        arg: 'AAA',
      },
      {
        label: 'Resume',
        href: './',
        icon: 'article-fill',
        handler: this.openPDF,
        arg: 'assets/CV_AndrewAndrusenko.pdf',
      },
      {
        label: 'Skills',
        href: './#Skills',
        icon: 'lightbulb-fill',
        handler: this.navigateToSection,
        arg: 'skills',
      },
      {
        label: 'Experience',
        href: './#Experience',
        icon: 'graduation-cap-fill',
        handler: this.navigateToSection,
        arg: 'experience',
      },
      {
        label: 'Projects',
        href: './#AAM-core',
        icon: 'mac-fill',
        handler: this.navigateToSection,
        arg: 'aam-core',
      },
      {
        label: 'Github',
        href: 'https://github.com/AndrewAndrusenko',
        target_blank: true,
        icon: 'github-fill',
      },
    ];
  }
  ngOnInit(): void {
    let offset = window.innerHeight < 600 ? 40 : 30;
    let i = (1 / (100 / document.documentElement.clientHeight)) * offset;
    this.viewportScroller.setOffset([1, i]);
  }
  navigateToSection = (anchor: string): void => {
    this.viewportScroller.scrollToAnchor(anchor);
  };
  openPDF = (url: string) => {
    window.open(url, '_blank');
  };
}
