import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  API_URL = 'https://api.spotify.com/v1';
  ACCESS_TOKEN = 'BQAK8_tMwhYd3J4mTcAFPvYA_5_BCEv3S4YVqJupAPYva0V5JDyxHN-IdL1QeTzXTfa1UtihL_rNT57tx2M';

  constructor(
    private http: HttpClient
  ) { }

  get(path: string) {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.ACCESS_TOKEN}`
    });
    return this.http.get(`${this.API_URL}${path}`, { headers });
  }

  getNewReleases() {
    return this.get('/browse/new-releases')
      .pipe( map( (data: any) => data.albums.items ));
  }

  search(q: string, type: string = 'artist') {
    return this.get(`/search?q=${q}&type=${type}`)
      .pipe( map((data: any) => data.artists.items ));
  }

  getArtist(id: string) {
    return this.get(`/artists/${id}`);
  }

  getTopTracks(artistId: string, market: string = 'ES') {
    return this.get(`/artists/${artistId}/top-tracks?market=${market}`)
      .pipe( map((data: any) => data.tracks ));
  }
}
