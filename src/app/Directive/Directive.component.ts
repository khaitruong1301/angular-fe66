import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-directive',
    template: `
        <div class="container" style="margin-bottom:500px">
           <h3 class="text-center"> Demo directive </h3>
           <h3>*ngIf (Dùng để xác định render hoặc không render ra giao diện)</h3>
           <p *ngIf="status">Title: cybersoft</p>
           <button class="btn btn-success" (click)="anHien()">Ẩn/Hiện</button>
           <div class="form-group mt-2 mb-2">
               <input class="form-control" #num />
               <button class="btn btn-outline-success" (click)="changeNumber(num.value)">OK</button>
           </div>
           <h3>Số: {{number}}</h3>
           <div *ngIf="number%2===0">Số chẵn</div>
           <div *ngIf="number%2!==0">Số lẻ</div>
           <h3>Ví dụ: </h3>
            <nav class="navbar navbar-expand-sm navbar-dark bg-dark">
                <a class="navbar-brand" href="#">Navbar</a>
                <button class="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                    aria-expanded="false" aria-label="Toggle navigation"></button>
                <div class="collapse navbar-collapse" id="collapsibleNavId">
                    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li class="nav-item active">
                            <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Link</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="dropdownId" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>
                            <div class="dropdown-menu" aria-labelledby="dropdownId">
                                <a class="dropdown-item" href="#">Action 1</a>
                                <a class="dropdown-item" href="#">Action 2</a>
                            </div>
                        </li>
                    </ul>
                    <form class="form-inline my-2 my-lg-0">
                        <div class="nav-item" *ngIf="isLogin;else divLogin">
                            <a class="nav-link text-white" href="#">Hello ! {{userName}}</a>
                            <a class="nav-link text-white" href="#" (click)="logout()">Đăng xuất</a>
                        </div>
                        <ng-template #divLogin>
                        <div class="nav-item">
                            <a class="nav-link text-white" href="#" (click)="login()">Đăng nhập</a>
                        </div>
                        </ng-template>
                    </form>
                </div>
            </nav>

            <hr />
            <h3>*ngSwitchCase</h3>
            <div [ngSwitch]="color">
                <div *ngSwitchCase="'red'" style="color: red;">Red</div>
                <div *ngSwitchCase="'green'" style="color: green;">Green</div>
                <div *ngSwitchCase="'blue'" style="color: blue;">Blue</div>
                <div *ngSwitchDefault style="color: orange;">Orange</div>
            </div>
            <select class="form-control" [(ngModel)]="color">
                <option value="red">red</option>
                <option value="green">green</option>
                <option value="blue">blue</option>
                <option value="orange">orange</option>
            </select>
            <hr />
            <h3>*ngFor: Dùng để render các phần tử giống nhau trên giao diện</h3>
            <div class="row">
                <div class="col-4" *ngFor="let prod of arrProduct;let i = index">
                    <div class="card">
                        <img [src]="prod.image" class="w-100" />
                        <div class="card-body">
                            <p>{{prod.name}}</p>
                            <p>{{prod.price.toLocaleString()}}</p>
                            <button class="btn btn-outline-success">Đặt hàng</button>
                        </div>
                    </div>
                </div>
            </div>

            <table class="table">
                <thead>
                    <tr>
                        <th>id</th>
                        <th>image</th>
                        <th>name</th>
                        <th>price</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="text-white" *ngFor="let item of arrProduct" [ngClass]="{'bg-dark':item.id %2 === 0, 'bg-success':item.id %2 !==0 }">
                        <td>{{item.id}}</td>
                        <td><img [src]="item.image" width="50" height="50"></td>
                        <td>{{item.name}}</td>
                        <td>{{item.price}}</td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
            <hr />
            <h3>ngStyle</h3>
            <p [ngStyle]="{'font-size':fontSize+'px'}">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto voluptatem earum ex ea tenetur quia. Eligendi aliquam quisquam nemo et sed quibusdam? Corporis ab saepe vitae, labore optio molestiae ex!</p>

            <button class="btn btn-outline-danger mr-2" (click)="tangFont()">+</button>
            <button class="btn btn-outline-danger mr-2" (click)="giamFont()">-</button>

            <hr />
            <h3>Bài tập login</h3>
            <app-baitap-login></app-baitap-login>
            <hr />
            <h3>Bài tập quản lý sản phẩm</h3>
            <app-baitap-qlsp></app-baitap-qlsp>

            <hr />
            <div style="margin-bottom:500px;height:500px">
                <h3>Directive antd</h3>
                <button nz-button nzType="primary"  >
                    <i nz-icon nzType="poweroff"></i>
                    Click me!
                    </button>
                </div>
        </div>
    `
})
export class DirectiveComponent implements OnInit {

    fontSize:number =  15;

    tangFont = () => {
        this.fontSize += 2;
    }

    giamFont = () => {
        this.fontSize -= 2;
    }

    arrProduct:any[] = [
        {id:1,name:'Phone 1', price:1000, image:'https://picsum.photos/id/1/200/200'},
        {id:2,name:'Phone 2', price:1000, image:'https://picsum.photos/id/2/200/200'},
        {id:3,name:'Phone 3', price:1000, image:'https://picsum.photos/id/3/200/200'},
    ]

 
    color:string = 'green'
    isLogin: boolean = false;
    userName: string = 'cybersoft';
    status: boolean = true;
    number: number = 3;
    constructor() { }
    ngOnInit() { }
    changeNumber = (num: string) => {
        this.number = Number(num);
    }
    login = ()=>{
        this.isLogin = true;
    }
    logout = () => {
        this.isLogin = false;
    }
    anHien = () => {
        this.status = !this.status;
    }
}