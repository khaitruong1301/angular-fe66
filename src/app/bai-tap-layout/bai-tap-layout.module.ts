import { NgModule } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { BaiTapLayoutComponent } from './bai-tap-layout.component';
import { BTContentComponent } from './bt-content.component';
import { BTHeaderComponent } from './bt-header.component';


@NgModule({
    declarations: [
        BaiTapLayoutComponent,
        BTContentComponent,
        BTHeaderComponent,
        HeaderComponent], //Khai báo các component thuộc module này
    imports: [], //Gắn các module khác vào module này
    exports: [BaiTapLayoutComponent], //Trích xuất ra component hoặc những thành phần khác của angular cho người khác import vao sử dụng

})
export class BaiTapLayoutModule { }
