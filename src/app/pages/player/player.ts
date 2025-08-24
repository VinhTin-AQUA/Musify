import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListSongsStore } from '../../stores/list-songs.store';

@Component({
    selector: 'app-player',
    imports: [CommonModule],
    templateUrl: './player.html',
    styleUrl: './player.scss',
})
export class Player {
    list = inject(ListSongsStore);
    currentSong: SongType = this.list.songs()[0];
    audio = new Audio();

    currentTime = signal<number>(0);
    duration = 0;
    isPlaying = false;

    constructor() {
        this.audio.src = this.currentSong.url;
        this.audio.addEventListener('timeupdate', () => {
            this.currentTime.set(this.audio.currentTime);
            this.duration = this.audio.duration;
        });
    }

    playPause() {
        if (this.isPlaying) {
            this.audio.pause();
            this.isPlaying = false;
        } else {
            this.audio.play();
            this.isPlaying = true;
        }
    }

    selectSong(song: SongType) {
        this.audio.pause();
        this.isPlaying = false;
        this.currentSong = song;
        this.audio.src = song.url;
        this.audio.load();
        this.playPause();
    }

    seek(event: Event) {
        const input = event.target as HTMLInputElement;
        const time = Number(input.value);
        this.audio.currentTime = time;
    }
}
