import { Component, signal } from '@angular/core';
import { SongItem } from './components/song-item/song-item';
import { SongModel } from './models/song.model';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-home',
    imports: [SongItem, RouterLink],
    templateUrl: './home.html',
    styleUrl: './home.scss',
})
export class Home {
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
}
