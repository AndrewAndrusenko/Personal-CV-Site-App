import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
    selector: 'app-bp-process-charts',
    templateUrl: './bp-process-charts.component.html',
    styleUrls: ['./bp-process-charts.component.scss'],
    imports:[MatButtonModule]
})
export class BpProcessChartsComponent {
  openPDF (url:string) {window.open(url,'_blank')}
}
