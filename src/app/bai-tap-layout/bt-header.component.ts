import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-bt-header',
    template: `
        <div class="header text-center">
                app-header
        </div>
    `,
    styles: [`
        .header{ 
            background-color: red;
            padding:10%;
            color:white;
            text-align: center;
        }
    `]
})

export class BTHeaderComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}