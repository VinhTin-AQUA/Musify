import { signalStore, withState } from '@ngrx/signals';

type SongState = {
    songs: SongType[];
};

const initialState: SongState = {
    songs: [
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
    ],
};

export const SongsStore = signalStore(
    {
        providedIn: 'root',
    },
    withState(initialState)
);
