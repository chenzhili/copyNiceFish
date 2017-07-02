import { Injectable } from "@angular/core";
import { Http } from "@angular/http";

import 'rxjs/add/operator/toPromise';
/*由于angular的promise返回的是一个rxjs的observable，但是他只是一个骨架，不存在toPromise的方法，所以要添加这个操作符*/

@Injectable()
export class PostListService{  
	constructor(public http:Http){}
	getAuthorList(){
		return this.http.get('http://121.196.220.118:8081/mock-data/postlist-mock.json?page=1').toPromise();
	}
}