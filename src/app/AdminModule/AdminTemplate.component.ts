import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-admin-template',
    template: `
        <div class="row">
            <div class="col-12 bg-dark">
                Header admin
            </div>
        </div>
        <div class="row">
            <div class="col-3">
                SideBar
            </div>
            <div class="col-9">
                <router-outlet></router-outlet>
            </div>
        </div>
    
    `
})

export class AdminTemplateComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}