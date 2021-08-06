import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-bai-tap-layout',
    template: `
        <div class="container-fluid">
            <app-bt-header></app-bt-header>
            <div class="row">
                <div class="col-8">
                    <app-bt-content></app-bt-content>
                </div>
                <div class="col-4">
                    <app-bt-content></app-bt-content>
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                <app-bt-content></app-bt-content>

                </div>
            </div>
        </div>
    `
})

export class BaiTapLayoutComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}