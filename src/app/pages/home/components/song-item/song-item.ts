import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'app-song-item',
    imports: [],
    templateUrl: './song-item.html',
    styleUrl: './song-item.scss',
})
export class SongItem {
    @Input() nameOfSong: string = 'Shape of you';
    @Input() singer: string = 'Kearan';
    @Input() duration: string = 'Kearan';
    @Input() thumbnail: string = '';

    // Phát sự kiện ra ngoài
    @Output() onClick = new EventEmitter<void>();

    handleClick() {
        this.onClick.emit(); // gọi sự kiện cho parent
    }
}
