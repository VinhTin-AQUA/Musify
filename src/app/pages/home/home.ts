import { Component, inject, signal } from '@angular/core';
import { SongItem } from './components/song-item/song-item';
import { CommonModule } from '@angular/common';
import { ListSongsStore } from '../../stores/list-songs.store';
import { SongCardItem } from './components/song-card-item/song-card-item';
import { MusicPlayerStore } from '../../stores/music-player.store';
import { Icon } from '../../shared/components/icon/icon';
import { DownloadMusic } from "./components/download-music/download-music";

@Component({
    selector: 'app-home',
    imports: [SongItem, CommonModule, SongCardItem, Icon, DownloadMusic],
    templateUrl: './home.html',
    styleUrl: './home.scss',
})
export class Home {
    list = inject(ListSongsStore);
    isShowList = signal<boolean>(true);
    musicPlayer = inject(MusicPlayerStore);
    openDownloadModal = false;

    toggleShowList(flag: boolean) {
        this.isShowList.set(flag);
    }

    playSong(song: SongType, songIndex: number) {
        this.musicPlayer.playSong(song, songIndex);
    }

    openModal(flag: boolean) {
        this.openDownloadModal = flag;
    }
}
