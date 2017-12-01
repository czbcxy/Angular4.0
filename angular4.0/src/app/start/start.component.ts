import {Component, OnInit} from '@angular/core';
import {Input} from '@angular/core/src/metadata/directives';

@Component({
    selector: 'app-start',
    templateUrl: './start.component.html',
    styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {


    @Input()
    private rating: number = 0;

    private start: boolean[];

    constructor() {
    }

    ngOnInit() {
        this.start = [false, true, true, true, true];
    }

}
