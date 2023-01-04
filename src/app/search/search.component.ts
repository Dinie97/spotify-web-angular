import { Component, OnInit } from '@angular/core';
import SearchData from './search.json';

interface content {
  img : string,
  title : string
}
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  listData = SearchData;
  browseAll : any = [];
  constructor() { }

  ngOnInit(): void {

    this.browseAll = this.listData.Browse;

    this.browseAll.forEach( (element : any) => {
      var color = Math.floor(0x1000000 * Math.random()).toString(16);
       element.color= '#' + ('000000' + color).slice(-6);

      console.log(element)
    });
  }

}
