import { Component, signal } from '@angular/core';

@Component({
    selector: 'app-sidebar',
    imports: [],
    templateUrl: './sidebar.html',
    styleUrl: './sidebar.scss',
})
export class Sidebar {
    list = signal<any>([1,2,3,3,4,5,5,6,6,7,7]);
}
