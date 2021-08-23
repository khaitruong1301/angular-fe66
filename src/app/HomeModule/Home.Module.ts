import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { isLoginGuard } from '../_core/guards/isLogin.guard';
import { isSubmitGuard } from '../_core/guards/isSubmit.guard';
import { AntDModule } from '../_core/Shared/Antd/Antd.module';
import { AboutComponent } from './About.Component';
import { DanhSachSanPhamComponent } from './BaiTapXemChiTiet/DanhSachSanPham.component';
import { ModalComponent } from './BaiTapXemChiTiet/Modal.component';
import { SanPhamComponent } from './BaiTapXemChiTiet/SanPham.component';
import { ContactComponent } from './Contact.component';
import { DetailComponent } from './Detail.component';
import { FormValidationComponent } from './FormValidation.component';
import { HeaderHomeComponent } from './HeaderHome.component';
import { HomePageComponent } from './HomePage.component';
import { HomeTemplateComponent } from './HomeTemplate.component';
import { LoginComponent } from './Login.component';
import { ProfileComponent } from './Profile.component';
import { RegisterComponent } from './Register.component';

//Định nghĩa router

const HomeRoute:Routes = [
    {path:'',component: HomeTemplateComponent,children:[
        {path:'',component:HomePageComponent},
        {path:'login',component:LoginComponent},
        // {path:'register',component:RegisterComponent},
        {path:'about',component:AboutComponent},
        {path:'contact',component:ContactComponent},
        {path:'detail/:id',component:DetailComponent},
        {path:'detail',component:DetailComponent},
        {path:'dssp',component:DanhSachSanPhamComponent},

        {path:'register',component:RegisterComponent,canDeactivate:[isSubmitGuard]},
        {path:'profile',component:ProfileComponent,canActivate:[isLoginGuard]},

    ]}
]

@NgModule({
    declarations:[ModalComponent,SanPhamComponent,DanhSachSanPhamComponent,ProfileComponent,HomePageComponent,AboutComponent,ContactComponent,RegisterComponent,LoginComponent,HomeTemplateComponent,HeaderHomeComponent,DetailComponent,FormValidationComponent],
    imports: [RouterModule.forChild(HomeRoute),CommonModule,FormsModule,AntDModule],
    providers:[],//Nơi sử dụng service k có provider in root
    exports: [],
})
export class HomeModule { }
