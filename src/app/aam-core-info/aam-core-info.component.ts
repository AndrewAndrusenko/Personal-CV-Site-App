import { Component } from '@angular/core';
import { CommService, languages } from '../comm.service';

@Component({
  selector: 'app-aam-core-info',
  templateUrl: './aam-core-info.component.html',
  styleUrls: ['./aam-core-info.component.scss']
})
export class AamCoreInfoComponent {
  lang:languages=languages.ENGLISH;
  public readonly languages : typeof languages = languages;
  constructor(private comm:CommService) {
    
  }
}
