import { Component, OnInit } from '@angular/core';
import { Router, Routes } from '@angular/router';
import playlistData  from './playlist.json'

interface topMix{
  TopMix : content
}

interface content {
  img : string,
  title : string,
  descp : string
}
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})


export class DashboardComponent implements OnInit {

  listData = playlistData;
  topMix : any = [];
  constructor(private router: Router,) { }

  ngOnInit(): void {
    this.topMix =this.listData.TopMix
    console.log(this.topMix)
  }

  playlistRoute(Id : string){
    this.router.navigate([`/playlist/${Id}`]);
  }

}
