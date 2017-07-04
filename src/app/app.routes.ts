/*import { NgModule } from '@angular/core';

import { RouterModule,Routes } from '@angular/router';

import { PostComponent } from "./post/post.component";

const routes:Routes = [
  {
    path:'posts',
    component:PostComponent
  },
  {
    path:'',
    redirectTo:'/posts',
    pathMatch:'full'
  }
];
@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRouterModule{}
*/
import { RouterModule } from '@angular/router';

import { PostComponent } from "./post/post.component";
import { LoginComponent } from "./login/login.component";

export const appRoutes:any = [ 
	{
		path:"posts",  
		component:PostComponent
	},
  {
    path:"login",
    component:LoginComponent
  },
  {
    path:"",
    redirectTo:"/posts", 
    pathMatch:"full"
  }
];
