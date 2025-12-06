import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppEnvironment {
  public localApiUrl = 'http://localhost:2004/api/purchases';
  // keep base API root here (no resource path)
  public productionApiUrl = 'https://home-server-latest.onrender.com/api/purchases';
}
