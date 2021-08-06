import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-bt-content',
    template: `
        <div class="content bg-dark text-white" style="height:500px">
            content
        </div>
    
    `
})

export class BTContentComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}