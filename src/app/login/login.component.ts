import { Component, OnInit } from '@angular/core';

/*引用的外部文件*/
import { User } from "./userObject";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'] 
})

export class LoginComponent implements OnInit {
  public user = new User("","");
  
  constructor() { 

  } 

  ngOnInit() {
  	console.log(this.user.userName);
  }

}
