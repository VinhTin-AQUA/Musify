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
        nameOfSong: 'No Song',
        singer: 'No Artist',
        thumbnail: '/images/microphone.png',
        url: '',
    },
    isVisible: false,
    isPlaying: false,
    audio: new Audio(),
    currentTime: 0,
    duration: 0,
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
        updatePlaybackRate(playbackRate: number) {
            // 0.25 -> 2
            const { audio } = store;
            audio().playbackRate = playbackRate;

            patchState(store, (currentState) => ({
                audio: audio(),
            }));
        },
    }))
);
