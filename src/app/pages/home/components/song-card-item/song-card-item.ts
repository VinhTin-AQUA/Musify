import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'app-song-card-item',
    imports: [CommonModule],
    templateUrl: './song-card-item.html',
    styleUrl: './song-card-item.scss',
})
export class SongCardItem {
    @Input() nameOfSong: string = '';
    @Input() singer: string = '';
    @Input() duration: number = 0;
    @Input() thumbnail: string = '';
    @Input() active: boolean = false;

        // Phát sự kiện ra ngoài
    @Output() playMusic = new EventEmitter<void>();

    handleClick() {
        this.playMusic.emit(); // gọi sự kiện cho parent
    }
}
