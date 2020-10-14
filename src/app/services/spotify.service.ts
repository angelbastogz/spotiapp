import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  API_URL = 'https://api.spotify.com/v1';
  ACCESS_TOKEN = 'BQDK_GYzX3UmjFu2l1rcDykPfPST1MBuJvNdLNPiV4KGWZCGR53rHw8pcww-YP8lNOML7cyl_25LcNrbL8g';

  constructor(
    private http: HttpClient
  ) { }

  getNewReleases() {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.ACCESS_TOKEN}`
    });
    return this.http.get(`${this.API_URL}/browse/new-releases`, { headers })
      .pipe( map( (data: any) => data.albums.items ));
  }

  search(q: string, type: string = 'artist') {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.ACCESS_TOKEN}`
    });
    return this.http.get(`${this.API_URL}/search?q=${q}&type=${type}`, { headers })
      .pipe( map((data: any) => data.artists.items ));
  }
}
