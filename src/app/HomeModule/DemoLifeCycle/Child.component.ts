import { AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import * as $ from 'jquery'

@Component({
    selector: 'app-child',
    template: `
        <div class="card">
            <img [src]="product.image" alt="..." />
            <div class="card-body">
                <p>{{product.name}}</p>
                <p>{{product.price}}</p>
            </div>
        </div>
    
    `
})

export class ChilldComponent implements OnInit,OnChanges,OnDestroy,AfterViewInit {

    @Input() product: any;
    constructor() { 
    }
    ngAfterViewInit(): void {
        console.log('contructor child')
        $('.card-body').addClass('bg-dark text-white');
    }
    ngOnChanges(changes: SimpleChanges): void {
        //Mỗi khi input thay đổi sẽ được kích hoạt (hơi giống didupdate bên react)
        console.log('onchange child',changes)
    }
    ngOnInit() {
        //Chạy 1 lần đầu tiên sau khi các component directive ... được render (Giống component didmount)
        console.log('oninit child',)

    }


    ngOnDestroy(): void {
        //Chạy trước khi giao diện component mất đi (Giống willunmount để huỷ các biến observable hoặc các hàm chạy ngầm)
        console.log('destroy component')
    }


}