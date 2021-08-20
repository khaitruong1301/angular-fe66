import { Component, OnInit } from '@angular/core';
import { QuanLyPhimService } from '../_core/Services/QuanLyPhim.service';

@Component({
    selector: 'app-home-page',
    template: `
        <div class="container">
            <h3>Danh sách phim</h3>
            <div class="row">
                <div class="col-4 mt-2" *ngFor="let phim of mangPhim">
                    <div class="card">
                        <img [src]="phim.hinhAnh" class="w-100" alt="..." />
                        <div class="card-body">
                            <p>{{phim.tenPhim}}</p>
                            <p>{{phim.moTa}}</p>
                            <a class="btn btn-success" [routerLink]="['detail',phim.maPhim]">Xem chi tiết </a>

                            <a class="btn btn-danger ml-2" routerLink="/detail/{{phim.maPhim}}">Xem chi tiết </a>

                            <a class="btn btn-warning ml-2" routerLink="/detail" [queryParams]="{maPhim:phim.maPhim,tenPhim:phim.tenPhim}">Xem chi tiết </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `
})

export class HomePageComponent implements OnInit {
    mangPhim:any[] = []
    constructor(private qlPhim:QuanLyPhimService) { }
    ngOnInit() {
        this.qlPhim.layDanhSachPhim().subscribe((result:any)=>{
            console.log('result',result.content)

            this.mangPhim = result.content;
        }, (errors)=> {
            console.log(errors.error)
        })
    }
}
