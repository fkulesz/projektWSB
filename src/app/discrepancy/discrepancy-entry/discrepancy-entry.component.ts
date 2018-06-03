import { Component, OnInit } from '@angular/core';
import { ColorsService } from '../../login/colors.service';

@Component({
  selector: 'app-discrepancy-entry',
  templateUrl: './discrepancy-entry.component.html',
  styleUrls: ['./discrepancy-entry.component.css']
})
export class DiscrepancyEntryComponent implements OnInit {

  menuColors={
    background: '',
     color: ''
 }


  constructor(private data: ColorsService) { }

  ngOnInit() {
    this.data.currentColors.subscribe(menuColors => this.menuColors=menuColors)
  }
}
