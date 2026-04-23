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
        'exchange-box-fill'
    /* 'add-box-fill',
    'add-box-line',
    'arrow-down-fill',
    'arrow-down-s-line',
    'arrow-up-s-line',
    'add-fill',
    'arrow-left-line',
    'ball-pen-fill',
    'bank-fill',
    'book-marked-fill',
    'building-4-fill',
    'calendar-event-fill',
    'checkbox-fill',
    'checkbox-multiple-fill',
    'close-line',
    'contract-line',
    'cup-fill',
    'delete-bin-5-line',
    'delete-bin-6-line',
    'delete-bin-fill',
    'download-2-line',
    'edit-line',
    'edit-2-fill',
    'eye-line',
    'file-copy-2-fill',
    'file-copy-line',
    'file-edit-fill',
    'file-text-fill',
    'first-aid-kit-fill',
    'folder-line',
    'home-4-fill',
    'information-fill',
    'information-line',
    'links-fill',
    'map-pin-range-fill',
    'pie-chart-2-fill',
    'save-2-fill',
    'search-eye-fill',
    'settings-3-fill',
    'settings-4-fill',
    'shopping-cart-fill',
    'timer-2-line',
    'timer-line',
    'upload-2-line',
    'user-3-fill',
    'user-settings-fill',
    'vip-crown-2-fill', */
])
  constructor () {
    const iconRegistry = inject(MatIconRegistry);
    const sanitizer = inject(DomSanitizer);
    this.iconsStore.forEach(icon=>{
      iconRegistry.addSvgIcon(icon, sanitizer.bypassSecurityTrustResourceUrl('assets/icons/'+icon+'.svg'));
    })
  }
}
