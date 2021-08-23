import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-register',
    template: `
    <div class="container">
        <h3 class="text-center">Register</h3>
        <div class="form-group">
            <p>userName</p>
            <input class="form-control" name="userName" />
        </div>
        <div class="form-group">
            <p>email</p>
            <input class="form-control" name="email" />
        </div>
        <div class="form-group">
            <p>password</p>
            <input class="form-control" name="password" />
        </div>
        <div class="form-group">
            <button (click)="submit()" class="btn btn-success">submit</button>
        </div>
    </div>
    `
})
export class RegisterComponent implements OnInit {

    isSubmit: boolean = false;
    constructor() { }

    ngOnInit() { }

    submit() {
        this.isSubmit = true;
        alert('true');
    }
}