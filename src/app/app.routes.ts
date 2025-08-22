import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Player } from './pages/player/player';

export const routes: Routes = [
    {
        path: 'home',
        component: Home,
        title: 'Home',
    },
    {
        path: 'player',
        component: Player,
        title: 'Player',
    },
    {
        path: '**',
        redirectTo: 'home',
        pathMatch: 'full',
    },
];
