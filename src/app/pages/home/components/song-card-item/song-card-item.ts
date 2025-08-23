import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-song-card-item',
    imports: [],
    templateUrl: './song-card-item.html',
    styleUrl: './song-card-item.scss',
})
export class SongCardItem {
    @Input() nameOfSong: string = '';
    @Input() singer: string = '';
    @Input() duration: string = '';
    @Input() thumbnail: string = '';
}
