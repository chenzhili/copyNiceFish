import { Component, OnInit } from '@angular/core';
import { PostListService } from "./service/postList.service";

/*import { Observable } from "rxjs/Observable";
import 'rxjs/add/observable/fromEvent';*/
import { Observable } from "rxjs";   //这与上面的引用是等价的


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
  providers:[PostListService]
})
export class PostComponent implements OnInit {  //class类里只会出现 属性和方法，其他都不鞥呢出现，还能运行函数的地方 只会出现在 声明周期钩子里，其他地方运行函数也只能出现在另一个函数里
  public authorList;/*列表数组*/
  public getList;/*对应的条数*/
  public total;/*总条数*/
  public page;/*总页数*/
  public p = 1;/*初始化首页*/
  public pageArr = [];

  public search;
  public target;
  public searchList:string[]=[];

  foc($event):void{
    this.target = $event.target;
    /*用rxjs去订阅观察者对象*/
    this.searchData();
  }
  /*用于搜索查找的方式*/ 
  private searchData():void{
    if(this.target){ 
    let obser = Observable.fromEvent(this.target,"keyup")  /*这里这个目标元素，不知道为啥用dom得到的不能用，所以说用了一种方式去获取了这个目标元素*/
                .debounceTime(500)
                .distinctUntilChanged()
                .subscribe(res=>{
                  this.loadData();
                },err=>{throw new Error(err);});
    }
  }
  
  /*点击事件的发生*/
  sList():void{
    this.loadData();
  }

  private loadData(){
    this.pageArr.length = 0;/*清空数组*/
    this.getList.length = 0;
    let reg = new RegExp(this.search);;
    for(let i=0;i<this.authorList.length;i++){ 
       if(reg.test(this.authorList[i].title)){
         this.searchList.push(this.authorList[i]);
       }
    }
    this.page = Math.ceil(this.searchList.length/5);
    for(let i=0;i<this.page;i++){
      this.pageArr.push(i+1);
    }
    this.getList = this.searchList;
  }

  constructor(private postListService:PostListService) { }
  getAuthor():void{
    /*这里获取数据*/
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
