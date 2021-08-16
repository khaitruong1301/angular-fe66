import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AntDModule } from '../_core/Shared/Antd/Antd.module';
import { DemoUIComponent } from './DemoUI.Component';


@NgModule({
    declarations:[DemoUIComponent],
    imports: [CommonModule,AntDModule],
    exports: [DemoUIComponent],
})
export class DemoUIModule { }
