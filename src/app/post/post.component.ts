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
  constructor(private postListService:PostListService) { }
  getAuthor():void{
  	this.postListService.getAuthorList().then(data=>{
  		console.log(data);
  	}).catch(err=>{
  		console.log(err);
  	});
  }
  ngOnInit() {
  	this.getAuthor();
  } 

}
