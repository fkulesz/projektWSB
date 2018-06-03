import { element } from 'protractor';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ColorsService } from './colors.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  menuColors = {
    background: '',
    color: ''
  }

  constructor(private router: Router, private data: ColorsService) { }

  ngOnInit() {
    this.data.currentColors.subscribe(menuColors => this.menuColors = menuColors)
  }



  loginUser(e) {
    e.preventDefault();
    console.log(e);
    var username = e.target.elements[0].value;
    var password = e.target.elements[1].value;

    if (username == 'vce' || username == 'penta' && password == 'password'){
      this.router.navigate(['home'])
    this.data.changeMenuColors({
      background: ' rgb(1, 0, 190)',
      color: '#f0000'
    });
  }
    else if (username == 'renault' && password == 'password'){
      this.router.navigate(['home'])
    this.data.changeMenuColors({
      background: 'rgb(154, 0, 0)',
      color: '#f0000'
    });
  }
    else if (username == 'mack' && password == 'password'){
    this.router.navigate(['home'])
  this.data.changeMenuColors({
    background: 'rgb(0, 17, 0)',
    color: '#f0000'
  });
}
else if (username == 'mackdual' && password == 'password'){
  this.router.navigate(['home'])
this.data.changeMenuColors({
  background: 'rgb(227, 223, 193)',
  color: '#fffff'
});
}

  }

  // alert(dealerNumber + '   ' + partPrefix + '   ' + partNumber);


}
