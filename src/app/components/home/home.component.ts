import { Component, OnInit } from '@angular/core';
import {SpotifyService} from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  newReleases: any[] = [];
  isLoading: boolean;
  error: boolean;
  errorMessage: string;

  constructor(
    private spotifyService: SpotifyService
  ) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.error = false;
    this.spotifyService.getNewReleases().subscribe((data: any) => {
      this.newReleases = data;
      this.isLoading = false;
    }, (errorResponse) => {
      this.error = true;
      this.isLoading = false;
      this.errorMessage = errorResponse.error.error.message;
    });
  }

}
