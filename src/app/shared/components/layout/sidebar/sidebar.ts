import { Component, EventEmitter, Output, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Icon } from "../../icon/icon";

@Component({
    selector: 'app-sidebar',
    imports: [RouterLink, RouterLinkActive, Icon],
    templateUrl: './sidebar.html',
    styleUrl: './sidebar.scss',
})
export class Sidebar {
    list = signal<any>([1,2,3,3,4,5,5,6,6,7,7]);
}
