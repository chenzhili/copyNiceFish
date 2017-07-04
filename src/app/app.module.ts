import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule  } from "@angular/http";


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
    RouterModule.forRoot(appRoutes)
    /*AppRouterModule*/
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
