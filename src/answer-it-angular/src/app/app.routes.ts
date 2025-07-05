import { Routes } from '@angular/router';
import { PlayComponent } from './play/play';
import { AboutComponent } from './about/about';
import { HowtoComponent } from './howto/howto';

export const routes: Routes = [
  { path: '', redirectTo: '/play', pathMatch: 'full' },
  { path: 'play', component: PlayComponent },
  { path: 'about', component: AboutComponent },
  { path: 'howto', component: HowtoComponent }
];
