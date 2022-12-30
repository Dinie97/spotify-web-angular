import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  constructor(private http: HttpClient) { }

  title = 'spotify-web';

  ngOnInit() {
		// API Call
		// let headers = new HttpHeaders({
		// 	'x-rapidapi-host': 'spotify23.p.rapidapi.com',
		// 	'x-rapidapi-key': '654b96c52cmshb59a8a17336fe2dp1aab49jsnf71da159a65a'
		// });
		// this.http
		// 	.get<any>('https://spotify23.p.rapidapi.com/search/', {
		// 		headers: headers,
    //     params: {
    //       q: '<REQUIRED>',
    //       type: 'multi',
    //       offset: '0',
    //       limit: '10',
    //       numberOfTopResults: '5'
    //     },
		// 	})
		// 	.subscribe(data => {
		// 		console.log(data);
		// 	});
	}

}
