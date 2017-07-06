import { Component, OnInit } from '@angular/core';
import { PostListService } from "./service/postList.service";

/*import { Observable } from "rxjs/Observable";
import 'rxjs/add/observable/fromEvent';*/
import { Observable } from "rxjs";


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
  providers:[PostListService]
})
export class PostComponent implements OnInit { 
  public authorList;/*列表数组*/
  public getList;/*对应的条数*/
  public total;/*总条数*/
  public page;/*总页数*/
  public p = 1;/*初始化首页*/
  public pageArr = [];

  /*用于搜索查找的方式*/
  public obser = Observable.fromEvent(document.getElementById("search"),"keyup");
  constructor(private postListService:PostListService) { }
  getAuthor():void{
  	this.postListService.getAuthorList().then(data=>{
  		this.authorList = JSON.parse(data["_body"]).items;
  		this.total = JSON.parse(data["_body"]).total;
      this.page = Math.ceil(this.total/5);
      for(let i=0;i<this.page;i++){
        this.pageArr.push(i+1);
      }
      if(this.total > 5){ 
        this.getList = this.authorList.slice(0,5); 
      }
  	}).catch(err=>{
  		console.log(err);
  	});
  }
  skipPage(page){
    if(page == 'z1'){ 
      if(this.p < this.page){ 
        this.p++;  
      }
    }else if(page == 'f1'){ 
      if(this.p > 1){
         this.p--;
      }
    }else{
      this.p = page;
    }
    if(this.p == this.page){ 
      this.getList = this.authorList.slice(5*(this.p-1));
    }else{
      this.getList = this.authorList.slice(5*(this.p-1),5*(this.p-1)+5);
    }
  }
  ngOnInit() {
  	this.getAuthor();
  }

}
