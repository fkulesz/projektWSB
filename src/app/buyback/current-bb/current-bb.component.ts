import { Component, OnInit } from '@angular/core';
import { ColorsService } from '../../login/colors.service';

@Component({
  selector: 'app-current-bb',
  templateUrl: './current-bb.component.html',
  styleUrls: ['./current-bb.component.css']
})
export class CurrentBbComponent implements OnInit {

  menuColors={
    background: '',
     color: ''
 }


 constructor( private data: ColorsService){}

    ngOnInit(){
      this.data.currentColors.subscribe(menuColors=>this.menuColors = menuColors)
    }

}
