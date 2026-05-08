import {inject, Injectable} from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
@Injectable({
    providedIn: 'root'
})
export class IconBaseService {
    public iconsStore:Set<string> = new Set([
        'coins-fill',
        'checkbox-line',
        'briefcase-4-fill',
        'check-fill',
        'group-fill',
        'account-pin-circle-line',
        'exchange-box-fill',
        'lock-password-fill'
    ])
    constructor () {
        const iconRegistry = inject(MatIconRegistry);
        const sanitizer = inject(DomSanitizer);
        this.iconsStore.forEach(icon=>{
            iconRegistry.addSvgIcon(icon, sanitizer.bypassSecurityTrustResourceUrl('assets/icons/'+icon+'.svg'));
        })
  }
}
