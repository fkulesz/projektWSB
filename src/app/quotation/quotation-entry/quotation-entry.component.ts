import { Component, OnInit } from '@angular/core';
import { ColorsService } from '../../login/colors.service';

@Component({
  selector: 'app-quotation-entry',
  templateUrl: './quotation-entry.component.html',
  styleUrls: ['./quotation-entry.component.css']
})
export class QuotationEntryComponent implements OnInit {

  menuColors={
    background: '',
     color: ''
 }


 constructor( private data: ColorsService){}

    ngOnInit(){
      this.data.currentColors.subscribe(menuColors=>this.menuColors = menuColors)
    }
}
