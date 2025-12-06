import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Footbar } from "./components/components/navgationbar/footbar/footbar";
import { Navbar } from "./components/components/navgationbar/navbar/navbar";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Footbar, Navbar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('homeui');
}
