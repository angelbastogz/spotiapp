import { Component, OnInit } from '@angular/core';
import {SpotifyService} from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  artists: any[] = [];
  isLoading: boolean;

  constructor(
    private spotifyService: SpotifyService,
  ) {
    this.isLoading = false;
  }

  ngOnInit(): void {
  }

  search(query: string) {
    if (query) {
      this.isLoading = true;
      this.spotifyService.search(query).subscribe((data: any) => {
        this.artists = data;
        this.isLoading = false;
      });
    } else {
      this.artists = [];
    }
  }
}
