import { Component} from '@angular/core';
import { IconBaseService } from './services/icon-base.service';
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    standalone: false
})
export class AppComponent 
{
  public deviceType:string = ''
  public viewArea = '150px 0px 0px 0px'
  constructor (private iconBaseService: IconBaseService){ }
}