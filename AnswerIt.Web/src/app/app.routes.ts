import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: '/play', pathMatch: 'full' },
  { path: 'play', loadComponent: () => import('./play/play').then(m => m.Play) },
  { path: 'about', loadComponent: () => import('./about/about').then(m => m.About) },
  { path: 'howto', loadComponent: () => import('./howto/howto').then(m => m.Howto) }
];
