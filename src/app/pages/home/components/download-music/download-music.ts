import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-download-music',
    imports: [CommonModule, FormsModule],
    templateUrl: './download-music.html',
    styleUrl: './download-music.scss',
    
})
export class DownloadMusic {
    @Input() isOpen = false;
    @Output() close = new EventEmitter<void>();

    name = '';
    loading = false;

    onCancel() {
        this.close.emit();
    }

    onDownload() {
        this.loading = true;

        // Giả lập quá trình download 2s
        setTimeout(() => {
            this.loading = false;
            this.close.emit();
            alert('Download thành công cho: ' + this.name);
        }, 2000);
    }
}
