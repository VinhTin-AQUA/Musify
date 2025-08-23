import { Component, inject, signal } from '@angular/core';
import { SongItem } from './components/song-item/song-item';
import { CommonModule } from '@angular/common';
import { SongsStore } from '../../stores/list-songs.store';
import { SongCardItem } from './components/song-card-item/song-card-item';
import { MusicPlayerStore } from '../../stores/music-player.store';

@Component({
    selector: 'app-home',
    imports: [SongItem, CommonModule, SongCardItem],
    templateUrl: './home.html',
    styleUrl: './home.scss',
})
export class Home {
    list = inject(SongsStore);
    isShowList = signal<boolean>(true);
    musicPlayer = inject(MusicPlayerStore);

    toggleShowList(flag: boolean) {
        this.isShowList.set(flag);
    }

    playSong(song: SongType) {
        this.musicPlayer.playSong(song);
    }
}
