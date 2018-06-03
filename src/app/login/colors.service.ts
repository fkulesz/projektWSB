import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';


@Injectable()
export class ColorsService {

  private defaultsColors = new BehaviorSubject<any>({  background: ' rgb(82, 82, 82)',
  color: '#ffffff'});
  currentColors = this.defaultsColors.asObservable();

  constructor() { }

    changeMenuColors(MenuColors: any){
      this.defaultsColors.next(MenuColors)
    }

}

