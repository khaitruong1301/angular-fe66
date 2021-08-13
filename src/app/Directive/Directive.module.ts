//import commonmodule để sử dụng directive
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BaiTapLoginComponent } from './BaiTapLogin.component';
import { BaiTapQLSPComponent } from './BaiTapQLSP.component';
import { DirectiveComponent } from './Directive.component';

import { AntDModule } from '../_core/Shared/Antd/Antd.module';

import { MaterialModule } from '../_core/Shared/Material/MaterialModule.module';

@NgModule({
    declarations:[DirectiveComponent,BaiTapLoginComponent,BaiTapQLSPComponent],
    imports: [CommonModule,FormsModule,AntDModule,MaterialModule],
    exports: [DirectiveComponent],
})

export class DirectiveModule { }
