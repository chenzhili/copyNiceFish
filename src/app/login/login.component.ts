import { Component, OnInit } from '@angular/core';

/*引用的外部文件*/
import { User } from "./userObject";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'] 
})
export class LoginComponent implements OnInit {
  
  constructor(public user:User) { 
  
  this.user = new User("","");

  } 

  ngOnInit() {

  }

}
