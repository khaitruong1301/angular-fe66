import { NgModule } from '@angular/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';

//Module trung gian chứa tất cả module của antd 

@NgModule({
    imports: [NzButtonModule,NzIconModule,NzTypographyModule,NzDrawerModule],
    exports: [NzButtonModule,NzIconModule,NzTypographyModule,NzDrawerModule],
})
export class AntDModule { }
