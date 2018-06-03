import { Component, OnInit } from '@angular/core';
import { ColorsService } from '../../login/colors.service';

@Component({
  selector: 'app-current-order',
  templateUrl: './current-order.component.html',
  styleUrls: ['./current-order.component.css']
})
export class CurrentOrderComponent implements OnInit {

  menuColors={
    background: '',
     color: ''
 }


  constructor(private data: ColorsService) { }

  ngOnInit() {
    this.data.currentColors.subscribe(menuColors => this.menuColors=menuColors)
  }

}
