import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BaiTapLayoutModule } from './bai-tap-layout/bai-tap-layout.module';
import { DataBindingModule } from './DataBinding/DataBinding.module';
import { DemoComponent } from './demo/demo.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent, //Các component trong module này (Mỗi component sinh ra phải ở trong 1 module)
  ],
  imports: [
    BrowserModule,BaiTapLayoutModule,DataBindingModule //nơi chèn các module khác vào
  ],
  providers: [], //nơi chèn các service vào
  bootstrap: [AppComponent] //Các component có thể sử dụng được trong file index.html
})
export class AppModule { } //Module gốc ứng dụng 
