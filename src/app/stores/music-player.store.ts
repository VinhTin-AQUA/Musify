import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';

type playbackRate = {
    listRate: number[];
    currentRate: number;
};

type MusicPlayerState = {
    song: SongType;
    isVisible: boolean;
    isPlaying: boolean;
    audio: HTMLAudioElement;
    currentTime: number;
    duration: number;
    volume: number;
    playbackRate: playbackRate;
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
    playbackRate: {
        currentRate: 1,
        listRate: [0.25, 0.5, 0.75, 1, 1.25, 1.5, 1.75, 2],
    },
};

export const MusicPlayerStore = signalStore(
    {
        providedIn: 'root',
    },
    withState(initialState),
    withMethods((store) => ({
        playSong(song: SongType): void {
            const audio = store.audio();
            const playbackRate = store.playbackRate();

            // set bài hát mới
            audio.src = song.url;
            audio.load();
            audio.play();

            audio.playbackRate = playbackRate.currentRate;
            playbackRate.currentRate = playbackRate.currentRate;

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
        updatePlaybackRate(newPlaybackRate: number) {
            // 0.25 -> 2
            const { audio, playbackRate } = store;
            audio().playbackRate = newPlaybackRate;
            playbackRate().currentRate = newPlaybackRate;

            patchState(store, (currentState) => ({
                audio: audio(),
            }));
        },
    }))
);
