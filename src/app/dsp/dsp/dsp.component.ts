import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ColorsService } from '../../login/colors.service';

@Component({
  selector: 'app-dsp',
  templateUrl: './dsp.component.html',
  styleUrls: ['./dsp.component.css']
})
export class DspComponent implements OnInit {

  menuColors={
    background: '',
     color: ''
 }


 constructor( private data: ColorsService){}

    ngOnInit(){
      this.data.currentColors.subscribe(menuColors=>this.menuColors = menuColors)
    }
}
