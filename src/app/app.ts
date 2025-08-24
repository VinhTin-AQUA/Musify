import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Sidebar } from './shared/components/layout/sidebar/sidebar';
import { MusicPlayer } from './shared/components/layout/music-player/music-player';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, Sidebar, MusicPlayer],
    templateUrl: './app.html',
    styleUrl: './app.scss',
})
export class App {
    protected readonly title = signal('Musify');
}
