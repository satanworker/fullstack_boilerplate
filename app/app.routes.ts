import { HomeComponent } from './home.component/home.component';
import {RouterConfig} from '@angular/router';

export const routes: RouterConfig = [
  { path: '', redirectTo: 'home'},
  { path: 'home', component: HomeComponent },
  { path: '**', redirectTo: 'home' }
];
