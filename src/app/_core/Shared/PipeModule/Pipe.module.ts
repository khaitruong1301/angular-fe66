import { NgModule } from '@angular/core';
import { ShortCutPipe } from './ShortCut.pipe';


@NgModule({
    declarations: [ShortCutPipe], //Khai báo các pipe mình định nghĩa
    imports: [],//nơi import những pipe module khác vào
    exports: [ShortCutPipe], //export các pipe, hoặc pipe module cho file module khác sử dụng
})
export class PipeModule { }
