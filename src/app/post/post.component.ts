import { Component, OnInit } from '@angular/core';
import { PostListService } from "./service/postList.service";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
  providers:[PostListService]
})
export class PostComponent implements OnInit {
  public authorList;
  public total;
  constructor(private postListService:PostListService) { }
  getAuthor():void{
  	this.postListService.getAuthorList().then(data=>{
  		this.authorList = JSON.parse(data["_body"]).items;
  		this.total = JSON.parse(data["_body"]).total;
  		console.log(this.authorList);
  	}).catch(err=>{
  		console.log(err);
  	});
  }
  ngOnInit() {
  	this.getAuthor();
  }

}
