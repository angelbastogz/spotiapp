import { Component, OnInit } from '@angular/core';
import {SpotifyService} from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  newReleases: any[] = [];

  constructor(
    private spotifyService: SpotifyService
  ) { }

  ngOnInit(): void {
    this.spotifyService.getNewReleases().subscribe((data: any) => {
      this.newReleases = data;
      console.log(this.newReleases);
    });
  }

}
