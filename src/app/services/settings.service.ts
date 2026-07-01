import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { map, Observable } from "rxjs";

@Injectable ({
    providedIn:'root'
})

export class SettingsService {
    http = inject(HttpClient)
    getSettings(path:string):Observable<any> {
        return this.http.get<Record<string,any>>('assets/settings/routes.json')
        .pipe(
            map(settings=> path.split('.').reduce((accum,cur)=> {
                return Object.hasOwn(accum,cur)? accum = accum[cur] : accum = {}
            },settings))
        )
    }
}