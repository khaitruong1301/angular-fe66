import { Component, OnDestroy, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { QuanLyPhimService } from '../_core/Services/QuanLyPhim.service';

@Component({
    selector: 'app-detail',
    template: `<div class="container">
        detail : {{id}} <br />
        detail snapShot : {{idSnapShot}}

        <div>
            <h3>Các phim liên quan</h3>
            <div>
                <a class="btn btn-primary" routerLink="/detail/4285">Phim 4285</a>
                <br />
                <a class="btn btn-success" routerLink="/detail/4286">Phim 4286</a>
            </div>
        </div>
    </div>`
})

export class DetailComponent implements OnInit, OnDestroy {

    id:string = '';
    idSnapShot:string = '';
    chiTietPhim:any ={};
    subParam!:Subscription;
    subService!:Subscription;

    constructor(private atvRoute:ActivatedRoute,private qlPhim:QuanLyPhimService,private title:Title) { }
    ngOnDestroy(): void {
        if(this.subParam) {
            this.subParam.unsubscribe()
        }
        if(this.subService){
            this.subService.unsubscribe()
        }
    }
    ngOnInit() { 

        console.log(this.atvRoute.snapshot.params.id) 

        // this.idSnapShot = this.atvRoute.snapshot.params.id;
       this.subParam = this.atvRoute.params.subscribe((params)=>{
            this.id = params.id;
            //Sau khi lấy dữ liệu param => gọi api
            // this.layChiTietPhim(this.id);
            this.layChiTietPhimAsync(this.id);
        })
        this.subParam = this.atvRoute.queryParams.subscribe((params) => {
            console.log('params',params)
            this.title.setTitle(params.tenPhim);
        })
    }

    layChiTietPhim(idPhim:string) {
       this.subService = this.qlPhim.layChiTietPhim(idPhim).subscribe((result) => {
            this.chiTietPhim = result.content;
            console.log('Chi tiết phim',this.chiTietPhim)
        },error=>{
            console.log(error.error)
        })
    }

    async layChiTietPhimAsync(idPhim:string) {
        try{
            let result = await this.qlPhim.layChiTietPhim(idPhim).toPromise();
            console.log('result',result);

        }
        catch(error){
            console.log(error.error)
        }
    }


}