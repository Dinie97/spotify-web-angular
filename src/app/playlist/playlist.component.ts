import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.scss']
})
export class PlaylistComponent implements OnInit {

  dataList : string[] = [];
  list: any[] = [];
  coverName : string = "";
  coverImg : string = "";
  descp : string = "";
  likes : number = 0;
  id : string = "";
  constructor(private http: HttpClient, private activatedRoute: ActivatedRoute, ) {
      
    this.activatedRoute.params.subscribe( (params : any) => {

      this.id = params.id;
    })
   }

  ngOnInit(): void {
    this.getPlaylistCover();
    this.getSongList();
  }

  renderOptionText(options: Array<{ name: string }>) {

    return options.map(({name}) => name).join(', ');
}

//API Call
getPlaylistCover(){
  // API Call
		let headers = new HttpHeaders({
			'x-rapidapi-host': 'spotify23.p.rapidapi.com',
			'x-rapidapi-key': '654b96c52cmshb59a8a17336fe2dp1aab49jsnf71da159a65a'
		});
		this.http
			.get<any>('https://spotify23.p.rapidapi.com/playlist/', {
				headers: headers,
        params: {id: this.id},
			})
			.subscribe(data => {

        this.coverName = data.name;
        this.descp = data.description;

        data.images.forEach(  (x :any) => {
            this.coverImg = x.url
        });

        var follow = data.followers;
        this.likes = follow.total
			});
}
  getSongList(){
		let headers = new HttpHeaders({
			'x-rapidapi-host': 'spotify23.p.rapidapi.com',
			'x-rapidapi-key': '654b96c52cmshb59a8a17336fe2dp1aab49jsnf71da159a65a'
		});
		this.http
			.get<any>('https://spotify23.p.rapidapi.com/playlist_tracks/', {
				headers: headers,
        params: {id: this.id, offset: '0', limit: '50'},
			})
			.subscribe(data => {

        data.items.forEach( ( x : any ) => {
          this.dataList.push(x.track)
        });
        
        this.dataList.forEach( ( x : any) => {
          
         var min = Math.floor((x.duration_ms/1000/60) << 0);
         var sec = Math.floor((x.duration_ms/1000) % 60);

          var ms = min + ':' + sec;

          var album = x.album;
          var albumList = album.images;
          var albumName = album.name;
          var img = "";
          albumList.forEach(  (z : any)  => {
                if(z.height == 64){
                    img = z.url;
                }
            });

          var song = {
              number : x.track_number,
              artist : x.artists,
              duration : parseFloat(ms).toFixed(2),
              cover : img,
              title : x.name,
              album : albumName,
              preview : x.preview_url
          }

          this.list.push(song)
        })
			});
  }

}
