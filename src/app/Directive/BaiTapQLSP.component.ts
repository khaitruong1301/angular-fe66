import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-baitap-qlsp',
    template: `
        <div class="container">
            <div class="card">
                <div class="card-header bg-dark text-white">Quản lý danh mục sản phẩm</div>
                <div class="card-body">
                    <div class="form-group">
                        <p>Mã SP</p>
                        <input class="form-control" [(ngModel)]="sanPham.maSP" />
                    </div>
                    <div class="form-group">
                        <p>Tên SP</p>
                        <input class="form-control" [(ngModel)]="sanPham.tenSP"/>
                    </div>
                    <div class="form-group">
                        <p>Giá</p>
                        <input class="form-control"  [(ngModel)]="sanPham.gia"/>
                    </div>
                </div>
                <div class="card-footer">
                    <button class="btn btn-outline-danger" (click)="themSanPham()">Thêm sản phẩm</button>
                </div>
            </div>

            <table class="table mt-2">
                <thead>
                    <tr class="bg-dark text-white">
                        <th>Mã sp</th>
                        <th>Tên sp</th>
                        <th>Giá </th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr *ngFor="let sanPham of mangSanPham;let i = index " [ngClass]="{'bg-dark text-white':(i+1)%2 === 0}">
                        <td>{{sanPham.maSP}}</td>
                        <td>{{sanPham.tenSP}}</td>
                        <td>{{sanPham.gia}}</td>
                        <td></td>
                    </tr>
                </tbody>

            </table>
        </div>
    
    `,
   
})

export class BaiTapQLSPComponent implements OnInit {

    sanPham:SanPham = {maSP:'',tenSP:'',gia:0}

    mangSanPham:SanPham[] = [
        {maSP:'1',tenSP:'Phone1',gia:1000}
    ]
    constructor() { }

    ngOnInit() { }

    themSanPham = () =>  {
        this.mangSanPham.push({...this.sanPham});
    }
}

interface SanPham {
    maSP:string,
    tenSP:string
    gia:number
}