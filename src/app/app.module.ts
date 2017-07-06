// 注意这里内置的angular的模块，想用到对应的模块内容，就需要在这里进行引用对应的模块，不然会报错
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule  } from "@angular/http";
import { FormsModule } from "@angular/forms";


import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';

import { appRoutes } from './app.routes';
import { LoginComponent } from './login/login.component';/*AppRouterModule*/ 

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
    /*AppRouterModule*/
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
