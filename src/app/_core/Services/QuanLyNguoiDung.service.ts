import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

const stateUserDefault = {id:'1',name:'Phương',avatar:'https://i.pravatar.cc/200?u=1',age:18}
@Injectable({providedIn: 'root'})
export class QuanLyNguoiDungService {

    
    //Khởi tạo state tại service
    userBehavior = new BehaviorSubject(stateUserDefault);
    userModal = this.userBehavior.asObservable();
    constructor(private httpClient: HttpClient) { 

    }
    

    changeModal(newState:User) {
        //Phương thức next (newState) thay đổi cho state hiện tại
        this.userBehavior.next(newState)
    }

    dangKy (nguoiDung:any):Observable<any> { 

        return this.httpClient.post('http://movieapi.cyberlearn.vn/api/QuanLyNguoiDung/DangKy',nguoiDung)
    }
}

interface User{
    id:string,
    name:string,
    avatar:string
    age:number
}