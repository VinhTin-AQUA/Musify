import { Component, inject, signal } from '@angular/core';
import { SongItem } from './components/song-item/song-item';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SongsStore } from '../../stores/list-songs.store';
import { SongCardItem } from './components/song-card-item/song-card-item';

@Component({
    selector: 'app-home',
    imports: [SongItem, RouterLink, CommonModule, SongCardItem],
    templateUrl: './home.html',
    styleUrl: './home.scss',
})
export class Home {
    list = inject(SongsStore);
    isShowList = signal<boolean>(false);

    toggleShowList(flag: boolean) {
        this.isShowList.set(flag);
    }
}
