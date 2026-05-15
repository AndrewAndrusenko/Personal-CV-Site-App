import {inject, Injectable} from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
@Injectable({
    providedIn: 'root'
})
export class IconBaseService {
    public iconsStore:Set<string> = new Set([
        'account-pin-circle-line',
        'briefcase-4-fill',
        'check-fill',
        'checkbox-line',
        'coins-fill',
        'github-fill',
        'group-fill',
        'exchange-box-fill',
        'facebook-fill',
        'linkedin-box-fill',
        'lock-password-fill'
    ])
    prepareIcons() {
        const iconRegistry = inject(MatIconRegistry);
        const sanitizer = inject(DomSanitizer);
        this.iconsStore.forEach(icon=>{
            iconRegistry.addSvgIcon(icon, sanitizer.bypassSecurityTrustResourceUrl('assets/icons/'+icon+'.svg'));
        })
    }
}
