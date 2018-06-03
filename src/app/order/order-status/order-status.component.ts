import { Component, OnInit } from '@angular/core';
import { ColorsService } from '../../login/colors.service';

@Component({
  selector: 'app-order-status',
  templateUrl: './order-status.component.html',
  styleUrls: ['./order-status.component.css']
})
export class OrderStatusComponent implements OnInit {

  menuColors={
    background: '',
     color: ''
 }


  constructor(private data: ColorsService) { }

  ngOnInit() {
    this.data.currentColors.subscribe(menuColors => this.menuColors=menuColors)
  }


}
