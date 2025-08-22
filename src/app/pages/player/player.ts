import { Component, signal } from '@angular/core';
import { SongModel } from '../home/models/song.model';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-player',
    imports: [CommonModule],
    templateUrl: './player.html',
    styleUrl: './player.scss',
})
export class Player {
    list = signal<SongModel[]>([
        {
            nameOfSong: 'Shape Of You',
            singer: 'Kearan',
            thumbnail:
                'https://i.ytimg.com/vi/qGRU3sRbaYw/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLBXP4axOpVxjQlix1paqJp9FRmX4w',
            url: '/music/Phố Đã Lên Đèn.mp3',
        },
        {
            nameOfSong: 'Shape Of You',
            singer: 'Kearan',
            thumbnail:
                'https://i.ytimg.com/vi/qGRU3sRbaYw/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLBXP4axOpVxjQlix1paqJp9FRmX4w',
            url: '/music/Phố Đã Lên Đèn.mp3',
        },
        {
            nameOfSong: 'Shape Of You',
            singer: 'Kearan',
            thumbnail:
                'https://i.ytimg.com/vi/qGRU3sRbaYw/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLBXP4axOpVxjQlix1paqJp9FRmX4w',
            url: '/music/Phố Đã Lên Đèn.mp3',
        },
        {
            nameOfSong: 'Shape Of You',
            singer: 'Kearan',
            thumbnail:
                'https://i.ytimg.com/vi/qGRU3sRbaYw/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLBXP4axOpVxjQlix1paqJp9FRmX4w',
            url: '/music/Phố Đã Lên Đèn.mp3',
        },
        {
            nameOfSong: 'Shape Of You',
            singer: 'Kearan',
            thumbnail:
                'https://i.ytimg.com/vi/qGRU3sRbaYw/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLBXP4axOpVxjQlix1paqJp9FRmX4w',
            url: '/music/Phố Đã Lên Đèn.mp3',
        },
    ]);

    currentSong: SongModel = this.list()[0];
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

    selectSong(song: SongModel) {
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
