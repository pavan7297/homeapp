import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-navbar',
  imports: [MatIconModule, RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Navbar {
  signin() {
    console.log('Sign In clicked');
  }
}
