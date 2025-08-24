import { signalStore, withState } from '@ngrx/signals';

type SongState = {
    songs: SongType[];
};

const initialState: SongState = {
    songs: [
        {
            nameOfSong: 'Phố Đã Lên Đèn 1',
            singer: 'Kearan',
            thumbnail:
                'https://i.ytimg.com/vi/qGRU3sRbaYw/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLBXP4axOpVxjQlix1paqJp9FRmX4w',
            url: '/music/Phố Đã Lên Đèn.mp3',
            duration: 0,
        },
        {
            nameOfSong: 'Phố Đã Lên Đèn 2',
            singer: 'Kearan',
            thumbnail:
                'https://i.ytimg.com/vi/qGRU3sRbaYw/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLBXP4axOpVxjQlix1paqJp9FRmX4w',
            url: '/music/Phố Đã Lên Đèn.mp3',
            duration: 0,
        },
        {
            nameOfSong: 'Phố Đã Lên Đèn 3',
            singer: 'Kearan',
            thumbnail:
                'https://i.ytimg.com/vi/qGRU3sRbaYw/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLBXP4axOpVxjQlix1paqJp9FRmX4w',
            url: '/music/Phố Đã Lên Đèn.mp3',
            duration: 0,
        },
    ],
};

export const ListSongsStore = signalStore(
    {
        providedIn: 'root',
    },
    withState(initialState)
);
