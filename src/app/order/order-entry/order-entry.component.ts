import { Component, OnInit } from '@angular/core';
import { ColorsService } from '../../login/colors.service';

@Component({
  selector: 'app-order-entry',
  templateUrl: './order-entry.component.html',
  styleUrls: ['./order-entry.component.css']
})
export class OrderEntryComponent implements OnInit {

  menuColors={
    background: '',
     color: ''
 }


  constructor(private data: ColorsService) { }

  ngOnInit() {
    this.data.currentColors.subscribe(menuColors => this.menuColors=menuColors)
  }

}
