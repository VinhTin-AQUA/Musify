import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Player } from './pages/player/player';
import { Settings } from './pages/settings/settings';

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
        path: 'settings',
        component: Settings,
        title: 'Settings',
    },
    {
        path: '**',
        redirectTo: 'home',
        pathMatch: 'full',
    },
];
