import { Component, OnInit } from '@angular/core';
import { TrackServices } from '../../../services/track/track'; // adjust import path

@Component({
  selector: 'app-track',
  templateUrl: './track.html',
  styleUrls: ['./track.css'],
})
export class Track implements OnInit {
  data: [] = [];
  constructor(private trackServ: TrackServices) {}

  ngOnInit(): void {
    this.trackServ
      .getAll()
      .then((data) => {
        this.data = data.data;
        console.log(this.data);
      })
      .catch((err) => {
        console.error('Failed to load tracks', err);
      });
  }
}
