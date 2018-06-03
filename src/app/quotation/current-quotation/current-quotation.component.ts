import { Component, OnInit } from '@angular/core';
import { ColorsService } from '../../login/colors.service';

@Component({
  selector: 'app-current-quotation',
  templateUrl: './current-quotation.component.html',
  styleUrls: ['./current-quotation.component.css']
})
export class CurrentQuotationComponent implements OnInit {

  menuColors={
    background: '',
     color: ''
 }


 constructor( private data: ColorsService){}

    ngOnInit(){
      this.data.currentColors.subscribe(menuColors=>this.menuColors = menuColors)
    }
}
