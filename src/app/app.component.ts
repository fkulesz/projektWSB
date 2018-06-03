import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customer } from './customer';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ColorsService } from './login/colors.service';
import { NgStyle } from "@angular/common";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  rForm: FormGroup;
  availableWarehouses : string[] = [ '52 - VIPS',  '70 - VIPS','73 - VIPS',  'R1POTPUA - VIPSSTD',  'R1POZPAT - VIPSCORE', 'R1POZPSE - VIPSCORE'];
  availableDistricts : string[] = [ '','2644',  '2647',  '42204',  '43401',  '8055'];
  availableCustomers : string[] = ['28040', '28046',  '28050',  '28051',  '28070',  '43501'];

  warehouse : string = '73';
  district : string = '';
  dealerNumber: string = '28040';

  selectedWarehouse : string;
  selectedDistrict : string ;
  selectedCustomer: string ;

  customerStatus : Customer;

  menuColors={
    background: '',
     color: ''
 }

 ngOnInit(){
   this.data.currentColors.subscribe(menuColors=>this.menuColors = menuColors)
 }
  readonly GETCUSTOMERSTATUS_URL = 'http://vf03.got.volvo.net:14103/api/req/R90340T/whcd/';

  constructor(private http: HttpClient, private fb: FormBuilder, private data: ColorsService){
    this.rForm = fb.group({//do poprawki
      'partNumber': [null, Validators.required],
     });
}

  getCustomerStatus(dealerNumber,district,warehouse) {

//     alert( dealerNumber+ '   ' + district + '   ' + warehouse);
       this.http.get<Customer>(this.GETCUSTOMERSTATUS_URL + warehouse + '/dlno/'+ dealerNumber)
      // .subscribe(data => console.log(data));
       .subscribe(data => this.customerStatus = data);
        }
        
 selectWarehouse(warehouse: string){
          this.selectedWarehouse= warehouse;
        }
 selectDistrict(district: string){
          this.selectedDistrict = district;
        }
  selectCustomer(customer: string){
          this.selectedCustomer = customer;
        }      


}
