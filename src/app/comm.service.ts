import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
export enum languages {
  ENGLISH = 'english',
  RUSSIAN = 'russian'
}
@Injectable({
  providedIn: 'root'
})

export class CommService {

  public langSub = new Subject<languages>()
  constructor() { }
}
