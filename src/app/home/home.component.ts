import { Component, OnInit } from '@angular/core';
import { ColorsService } from '../login/colors.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  menuColors={
    background: '',
     color: ''
 }


  constructor(private data: ColorsService) { }

  ngOnInit() {
    this.data.currentColors.subscribe(menuColors => this.menuColors=menuColors)
  }


}
