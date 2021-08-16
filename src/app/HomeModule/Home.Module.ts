import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './About.Component';
import { ContactComponent } from './Contact.component';
import { HeaderHomeComponent } from './HeaderHome.component';
import { HomePageComponent } from './HomePage.component';
import { HomeTemplateComponent } from './HomeTemplate.component';
import { LoginComponent } from './Login.component';
import { RegisterComponent } from './Register.component';

//Định nghĩa router

const HomeRoute:Routes = [
    {path:'',component: HomeTemplateComponent,children:[
        {path:'',component:HomePageComponent},
        {path:'login',component:LoginComponent},
        {path:'register',component:RegisterComponent},
        {path:'about',component:AboutComponent},
        {path:'contact',component:ContactComponent},

    ]}
]



@NgModule({
    declarations:[HomePageComponent,AboutComponent,ContactComponent,RegisterComponent,LoginComponent,HomeTemplateComponent,HeaderHomeComponent],
    imports: [RouterModule.forChild(HomeRoute),CommonModule],
    providers:[],//Nơi sử dụng service k có provider in root
    exports: [],
})
export class HomeModule { }
