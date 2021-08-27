import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-header-home',
    template: `
        <nav class="navbar navbar-expand-sm navbar-dark bg-dark">
            <a class="navbar-brand" href="/home">Cybersoft</a>
            <button class="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                aria-expanded="false" aria-label="Toggle navigation"></button>
            <div class="collapse navbar-collapse" id="collapsibleNavId">
                <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li class="nav-item active">
                        <a class="nav-link" routerLink="/home">Home</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" routerLink="/register"  >
                        register
                    </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" routerLink="/login">login</a>
                    </li>
                    <li class="nav-item">
                        <a routerLink="/about" class="nav-link">About</a>
                    </li>
                    <li class="nav-item">
                        <a routerLink="/demopipe" class="nav-link">Demo pipe</a>
                    </li>
                    <li class="nav-item">
                        <a routerLink="/demolifecycle" class="nav-link">Demo lifecycle</a>
                    </li>
                </ul>
                <form class="form-inline my-2 my-lg-0">
                    <input class="form-control mr-sm-2" type="text" placeholder="Search">
                    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
            </div>
        </nav>
    
    
    `
})

export class HeaderHomeComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}