import { Component, inject, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MusicPlayerStore } from '../../../../stores/music-player.store';
import { patchState } from '@ngrx/signals';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-music-player',
    imports: [FormsModule, CommonModule],
    templateUrl: './music-player.html',
    styleUrl: './music-player.scss',
})
export class MusicPlayer {
    musicPlayer = inject(MusicPlayerStore);

    togglePlay() {
        this.musicPlayer.togglePlay();
    }

    seekTo(time: number) {
        this.musicPlayer.seekTo(time);
    }

    setVolume(vol: number) {
        this.musicPlayer.setVolume(vol);
    }

    prevSong() {
        // TODO: xử lý sang bài trước
    }

    nextSong() {
        // TODO: xử lý sang bài tiếp theo
    }

    formatTime(seconds: number) {
        if (!seconds) return '0:00';
        const m = Math.floor(seconds / 60);
        const s = Math.floor(seconds % 60);
        return `${m}:${s < 10 ? '0' : ''}${s}`;
    }
}
