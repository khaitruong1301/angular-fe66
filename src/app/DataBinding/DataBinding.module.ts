import { NgModule } from '@angular/core';
import { DataBindingComponent } from './DataBinding.component';
//thư viện sử dụng 2waybinding
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BaiTapDataBinding } from './BaiTapDatabinding.component';

@NgModule({
    declarations: [DataBindingComponent,BaiTapDataBinding],
    imports: [FormsModule,CommonModule],
    exports: [DataBindingComponent],

})



export class DataBindingModule { }
