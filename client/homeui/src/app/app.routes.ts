import { Routes } from '@angular/router';
import { Home } from './components/pages/home/home';
import { Err404 } from './components/shared/err404/err404';
import { Track } from './components/pages/track/track';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'track', component: Track },
  // {path:"/", component:},
  // {path:"/", component:},
  // {path:"/", component:},
  // {path:"/", component:},
  { path: 'error-404', component: Err404 },
  { path: '**', redirectTo: '/error-404' },
];
