import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class QuanLyNguoiDungService {
    constructor(private httpClient: HttpClient) { 



    }
    

    dangKy (nguoiDung:any):Observable<any> { 

        return this.httpClient.post('http://movieapi.cyberlearn.vn/api/QuanLyNguoiDung/DangKy',nguoiDung)
    }
}