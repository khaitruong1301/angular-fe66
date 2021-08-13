import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BaiTapLayoutModule } from './bai-tap-layout/bai-tap-layout.module';
import { DataBindingModule } from './DataBinding/DataBinding.module';
import { DemoComponent } from './demo/demo.component';
import { DirectiveModule } from './Directive/Directive.module';
import { HeaderComponent } from './header/header.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PropsModule } from './Props/Props.module';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent, //Các component trong module này (Mỗi component sinh ra phải ở trong 1 module)
  ],
  imports: [
    BrowserModule,BaiTapLayoutModule,DataBindingModule,DirectiveModule, FormsModule, HttpClientModule, BrowserAnimationsModule,PropsModule //nơi chèn các module khác vào
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }], //nơi chèn các service vào
  bootstrap: [AppComponent] //Các component có thể sử dụng được trong file index.html
})
export class AppModule { } //Module gốc ứng dụng 
