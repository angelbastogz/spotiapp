import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {SpotifyService} from '../../services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.scss']
})
export class ArtistComponent implements OnInit {
  artist: any = {};
  topTracks: any[] = [];
  isLoading: boolean;

  constructor(
    private router: ActivatedRoute,
    private spotifyService: SpotifyService
  ) {
    this.router.params.subscribe(params => {
      this.getArtist(params.id);
      this.getTopTracks(params.id);
    });
  }

  ngOnInit(): void {

  }

  getArtist( id: string ) {
    this.isLoading = true;
    this.spotifyService.getArtist(id).subscribe( (data: any) => {
      this.artist = data;
      this.isLoading = false;
    });
  }

  getTopTracks( id: string) {
    this.isLoading = true;
    this.spotifyService.getTopTracks(id).subscribe((data: any) => {
      this.topTracks = data;
    });
  }

}
