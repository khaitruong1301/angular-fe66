import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { QuanLyNguoiDungService } from '../_core/Services/QuanLyNguoiDung.service';
import { QuanLyPhimService } from '../_core/Services/QuanLyPhim.service';


// interface AppState {
//     ModalState:ModalState
// }

@Component({
    selector: 'app-form-validation',
    template: `
        <form #frmDangKy="ngForm" class="container" (ngSubmit)="dangKy(frmDangKy.value)">
            <h3 class="display-4">Đăng ký</h3>
            <div class="form-group">
                <p>Tài khoản</p>
                <input #taiKhoan="ngModel" class="form-control" name="taiKhoan" ngModel required minlength="6" maxlength="32"/>
                <div class="alert alert-danger"  *ngIf="(taiKhoan.touched || taiKhoan.dirty) && taiKhoan.errors">
                     <p *ngIf="taiKhoan.errors.required" class="text text-danger">Tài khoản không được bỏ trống !</p>
                     <p *ngIf="taiKhoan.errors.minlength || taiKhoan.errors.maxlength">Tài khoản từ 6 đến 32 ký tự !</p>
                </div>
            </div>
            <div class="form-group">
                <p>Họ tên</p>
                <input class="form-control" #hoTen="ngModel" name="hoTen" ngModel pattern="^[A-Z a-z]+$" required/>
                <div class="alert alert-danger"  *ngIf="(hoTen.touched || hoTen.dirty) && hoTen.errors">
                     <p *ngIf="hoTen.errors.required" class="text text-danger">Mật khẩu không được bỏ trống !</p>
                     <p *ngIf="hoTen.errors.pattern">Họ tên không được chứa ký tự đặc biệt!</p>
                </div>
            </div>
            <div class="form-group">
                <p>Mật khẩu</p>
                <input class="form-control" name="matKhau" ngModel/>
            </div>
            <div class="form-group">
                <p>Email</p>
                <input #email="ngModel" class="form-control" name="email" ngModel pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" />
                <div class="alert alert-danger"  *ngIf="(email.touched || email.dirty) && email.errors">
                     <p *ngIf="email.errors.required" class="text text-danger">Mật khẩu không được bỏ trống !</p>
                     <p *ngIf="email.errors.pattern">Email không hợp lệ!</p>
                </div>
            </div>
            <div class="form-group">
                <p>Số điện thoại</p>
                <input class="form-control" name="soDt"  ngModel/>
            </div>
            <div class="form-group">
                <p>Mã nhóm</p>
                <select class="form-control" name="maNhom" ngModel>
                    <option value="GP01">GP01</option>
                    <option value="GP02">GP02</option>
                    <option value="GP03">GP03</option>
                </select>
            </div>
            <div class="form-group">
                <button class="btn btn-success" [disabled]="frmDangKy.invalid || frmDangKy.submitted"  type="submit">Đăng ký</button>
            </div>
        </form>

        <div class="container">
            <div class="card">
                <div class="card-header bg-dark text-white">Danh sách người dùng</div>
                <div class="card-body">
                    <table class="table">
                        <thead>
                            <tr>
                                <th>Tài khoản</th>
                                <th>Họ tên</th>
                                <th>Mật khẩu</th>
                                <th>Email</th>
                                <th>Số điện thoại</th>
                                <th>Mã nhóm</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <ng-container *ngIf="!isEdit">
                            <tr *ngFor="let nguoiDung of dsNguoiDung">
                                <td>{{nguoiDung.taiKhoan}}</td>
                                <td>{{nguoiDung.hoTen}}</td>
                                <td>{{nguoiDung.matKhau}}</td>
                                <td>{{nguoiDung.email}}</td>
                                <td>{{nguoiDung.soDt}}</td>
                                <td>{{nguoiDung.maNhom}}</td>
                                <td>
                                    <button class="btn btn-success" (click)="chinhSua(nguoiDung)">Chỉnh sửa</button>
                                    <button class="btn btn-primary" (click)="changeEdit(true)">Chỉnh sửa</button>
                                    <button class="btn btn-danger">Xoá</button>
                                </td>
                            </tr>
                            </ng-container>
                            <ng-container *ngIf="isEdit">ß
                            <tr  *ngFor="let nguoiDung of dsNguoiDung">
                                <td><input class="form-control" [(ngModel)]="nguoiDung.taiKhoan" /></td>
                                <td><input class="form-control" [(ngModel)]="nguoiDung.hoTen" /></td>
                                <td><input class="form-control" [(ngModel)]="nguoiDung.matKhau" /></td>
                                <td><input class="form-control" [(ngModel)]="nguoiDung.email" /></td>
                                <td><input class="form-control" [(ngModel)]="nguoiDung.soDt" /></td>
                                <td><input class="form-control" [(ngModel)]="nguoiDung.maNhom" /></td>
                                <td>
                                    <button class="btn btn-success" (click)="changeEdit(false)">Cập nhật</button>
                                    <button class="btn btn-danger">Xoá</button>
                                </td>
                            </tr>
                            </ng-container>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    `,
    styles: [
        `
            input.ng-invalid{
                border-left:5px solid red;
            }
            input.ng-valid{
                border-left:5px solid green;
            }
        `
    ]
})

export class FormValidationComponent implements OnInit {
    isEdit: boolean = false;

    changeEdit(edit: boolean) {
        this.isEdit = edit;
    }

    @ViewChild('frmDangKy') frmDangKy!: NgForm;

    dsNguoiDung: any[] = [
        { taiKhoan: 'nguyenvana', hoTen: 'Nguyễn Văn A', matKhau: '123123123', email: 'nguyenvana@gmail.com', soDt: '09090909', maNhom: 'GP01' },
        { taiKhoan: 'nguyenvanb', hoTen: 'Nguyễn Văn B', matKhau: '123123123', email: 'nguyenvanb@gmail.com', soDt: '09090909', maNhom: 'GP02' },
    ];

    constructor(private nguoiDungService: QuanLyNguoiDungService) { }

    chinhSua(nguoiDungEdit: any) {
        this.frmDangKy.setValue(nguoiDungEdit);
    }

    ngOnInit() {




    }

    async dangKy(value: NgForm) {
        //Call api
        try {
            const result = await this.nguoiDungService.dangKy(value).toPromise();

            console.log('result',result)
        }catch(error) {
            console.log('error',error.error)
        }
       

        console.log('value', value);
    }
}