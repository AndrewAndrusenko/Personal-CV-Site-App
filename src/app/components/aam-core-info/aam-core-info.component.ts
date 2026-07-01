import { AsyncPipe, NgOptimizedImage } from '@angular/common';
import { Component, inject } from '@angular/core';
import { SettingsService } from '../../services/settings.service';
import { Observable } from 'rxjs';
@Component({
    selector: 'app-aam-core-info',
    templateUrl: './aam-core-info.component.html',
    styleUrls: ['./aam-core-info.component.scss'],
    imports:[
        NgOptimizedImage,
        AsyncPipe
    ]
})
export class AamCoreInfoComponent {
    projectUrl$!: Observable<string>
    settingService = inject(SettingsService)
    ngOnInit(): void {
        this.projectUrl$ = this.settingService.getSettings('projects.aam.url')
    }
}
