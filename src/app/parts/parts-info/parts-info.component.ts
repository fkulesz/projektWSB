import {FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PartsInfoService } from './../parts-info.service';
import { PartsInfoFormValues } from './../PartsInfoFomValues';
import { PartPrefix } from './../part-prefix';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Http, Response } from '@angular/http';
import { Post } from './../post';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/retry';
import 'rxjs/add/observable/of';
import { Part } from './../part';
import { ColorsService } from '../../login/colors.service';


@Component({
  selector: 'app-parts-info',
  templateUrl: './parts-info.component.html',
  styleUrls: ['./parts-info.component.css']
})
export class PartsInfoComponent implements OnInit {
  availablePartPrefix : string[] = ['VO', 'VOP',  'TRA',  'VBD',  'TSE'];
  OrderClass: string[] = ['Day Order', 'VOR Order','Stock Order'];
  dealerNumber : string;
  partPrefix : string;
  partNumber : string;
  rForm: FormGroup;
  partInfo : Part;
  error: string;
  selectedOrder: string;
  selectedPartPrefix: string;
  infoActive: boolean = false;
  menuColors={
    background: '',
     color: ''
 }


  //readonly ROOT_URL = 'http://vf03.got.volvo.net:14103/api/req/R90353T/dlno/28051/pprf/VO/prtn/205' 
  readonly GETPARTINFO_URL = 'http://vf03.got.volvo.net:14103/api/req/R90353T/dlno/';


  constructor(private http: HttpClient, private fb: FormBuilder, private data: ColorsService){
    this.rForm = fb.group({
             'partNumber': [null, Validators.compose([Validators.required, Validators.minLength(1), Validators.maxLength(47)])],
            });
    }


    getPartInfo(dealerNumber, partPrefix, partNumber ){

    // alert(dealerNumber + '   ' + partPrefix + '   ' + partNumber);
       this.http.get<Part>(this.GETPARTINFO_URL + dealerNumber + '/pprf/'+ partPrefix + '/prtn/' + partNumber)
      // .subscribe(data => console.log(data));
       .subscribe(data => this.partInfo = data,
        error => this.error = error );
        this.infoActive = true;
        }
        
        selectOrder(order: string){
          this.selectedOrder = order;
        }
        selectPartPrefix(prefix: string){
          this.selectedPartPrefix = prefix;
        }

  


  ngOnInit() {
    this.data.currentColors.subscribe(menuColors => this.menuColors=menuColors)
  }



/*getPosts(){
  let params = new HttpParams().set('userId', '1');

  this.posts = this. http.get(this.ROOT_URL + '/posts',{ params})
}

createPosts(){
  const data: Post = {
    id : null,
    userId: 23,
    title: 'My new post',
    body: 'hELLO wORDL!!!!!!'
  }
  this.newPost = this.http.post<Post>(this.ROOT_URL + '/foo', data)
  .retry(3)
  .catch(err => {
    console.log(err)
    return Observable.of(err)
  })
    //.map(post => post.title)
}*/

  //onSubmit(formValues: PartsInfoFormValues){
   //   console.log(formValues);
  //}

}

