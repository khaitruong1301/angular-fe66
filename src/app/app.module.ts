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
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PropsModule } from './Props/Props.module';
import { DemoUIModule } from './DemoUIModule/DemoUI.module';

registerLocaleData(en);
import { HomePageComponent } from './HomeModule/HomePage.component';
import { AboutComponent } from './HomeModule/About.Component';
import { RegisterComponent } from './HomeModule/Register.component';
import { LoginComponent } from './HomeModule/Login.component';
import { ContactComponent } from './HomeModule/Contact.component';

//định nghĩa router
import { RouterModule, Routes } from '@angular/router';
import { HomeModule } from './HomeModule/Home.Module';
import { HeaderHomeComponent } from './HomeModule/HeaderHome.component';
import { AdminModule } from './AdminModule/Admin.module';
import { HeaderInterceptor } from './_core/guards/jwt.interceptor';
//Cấu hình ngrx/store
import {StoreModule} from '@ngrx/store'
import { modalReducer } from './_core/redux/Reducers/Modal.Reducer';



const AppRoute: Routes = [
    {path:'home',loadChildren: ()=> HomeModule },
    {path:'admin',loadChildren:()=>AdminModule},
    {path:'',loadChildren:()=>HomeModule},
    //Định nghĩa khi người dùng gõ 1 đường dẫn không có trong routes
    {path:'**',redirectTo:''}
]

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,BaiTapLayoutModule,DataBindingModule,DirectiveModule, FormsModule, HttpClientModule, BrowserAnimationsModule,PropsModule,DemoUIModule,
    RouterModule.forRoot(AppRoute), //nơi chèn các module khác vào
    StoreModule.forRoot({modalReducer:modalReducer})
  ],
  providers: [
    { provide: NZ_I18N, useValue: en_US },
    {provide:HTTP_INTERCEPTORS,useClass:HeaderInterceptor,multi:true}
  ], //nơi chèn các service vào
  bootstrap: [AppComponent] //Các component có thể sử dụng được trong file index.html
})
export class AppModule { } //Module gốc ứng dụng 
