import { Component } from '@angular/core';
import { Icon } from "../../shared/components/icon/icon";
import { ClickOutside } from '../../shared/directives/click-outside';

@Component({
    selector: 'app-histories',
    imports: [Icon, ClickOutside],
    templateUrl: './histories.html',
    styleUrl: './histories.scss',
})
export class Histories {
    items = [
        { id: 1, title: 'Item 1', logo: 'https://via.placeholder.com/40' },
        { id: 2, title: 'Item 2', logo: 'https://via.placeholder.com/40' },
        { id: 3, title: 'Item 3', logo: 'https://via.placeholder.com/40' },
    ];

    openMenuId: number | null = null;

    toggleMenu(id: number) {
        this.openMenuId = this.openMenuId === id ? null : id;
    }

    onAction(action: string, itemId: number) {
        console.log(`Action: ${action}, Item: ${itemId}`);
        this.openMenuId = null; // đóng menu sau khi chọn
    }
}
