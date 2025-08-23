import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';

type MusicPlayerState = {
    song: SongType;
    isVisible: boolean;
    isPlaying: boolean;
    audio: HTMLAudioElement;
    currentTime: number;
    duration: number;
    volume: number;
};

const initialState: MusicPlayerState = {
    song: {
        nameOfSong: 'Phố Đã Lên Đèn',
        singer: "I don't know",
        thumbnail:
            'https://i.ytimg.com/vi/qGRU3sRbaYw/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLBXP4axOpVxjQlix1paqJp9FRmX4w',
        url: '/music/Phố Đã Lên Đèn.mp3',
    },
    isVisible: false,
    isPlaying: false,
    audio: new Audio(),
    currentTime: 0,
    duration: 282,
    volume: 1,
};

export const MusicPlayerStore = signalStore(
    {
        providedIn: 'root',
    },
    withState(initialState),
    withMethods((store) => ({
        playSong(song: SongType): void {
            const audio = store.audio();

            // set bài hát mới
            audio.src = song.url;
            audio.load();
            audio.play();

            // gắn sự kiện
            audio.ontimeupdate = () => {
                patchState(store, { currentTime: audio.currentTime });
            };

            audio.onloadedmetadata = () => {
                patchState(store, { duration: audio.duration });
            };

            // cập nhật state ban đầu
            patchState(store, {
                song,
                isPlaying: true,
                isVisible: true,
                currentTime: 0,
                duration: audio.duration || 0,
            });
        },
        togglePlay(): void {
            const { isPlaying, audio } = store;

            if (isPlaying()) {
                audio().pause();
            } else {
                audio().play();
            }

            patchState(store, (currentState) => ({
                isPlaying: !isPlaying(),
            }));
        },
        seekTo(time: number) {
            store.audio().currentTime = time;
            patchState(store, (currentState) => ({
                currentTime: time,
            }));
        },
        setVolume(vol: number) {
            store.audio().volume = vol;

            patchState(store, (currentState) => ({
                volume: vol,
            }));
        },
    }))
);
