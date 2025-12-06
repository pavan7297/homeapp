import { Injectable } from '@angular/core';
import { AppEnvironment } from '../../env/environment'; // adjust path as needed

@Injectable({
  providedIn: 'root',
})
export class TrackServices {
  constructor(private env: AppEnvironment) {}

  // return a Promise<any> to make intention explicit
  getAll(): Promise<any> {
    // const url = "https://home-server-latest.onrender.com/api/purchases";
    const url = 'http://localhost:2004/api/purchases';
    return fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((res) => {
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      return res.json();
    });
  }
}
