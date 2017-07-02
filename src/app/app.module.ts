import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule  } from "@angular/http";


import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';

import { appRoutes } from './app.routes';/*AppRouterModule*/

@NgModule({
  declarations: [
    AppComponent,
    PostComponent
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
