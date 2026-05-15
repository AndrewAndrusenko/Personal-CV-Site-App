import { provideHttpClient, withInterceptors, withInterceptorsFromDi } from '@angular/common/http';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { IconBaseService } from './app/services/icon-base.service';
import { inject, provideAppInitializer } from '@angular/core';

bootstrapApplication(AppComponent, {
    providers: [
        provideHttpClient(withInterceptors([])),
        provideAppInitializer(()=>{
            const iconBaseService = inject(IconBaseService);
            return iconBaseService.prepareIcons();
        })
    ]
})
  .catch(err => console.error(err));
