import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'config-viewer',
    loadChildren: () => import('./config-viewer/config-viewer.module').then(m => m.ConfigViewerModule)
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];
