import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminTemplateComponent } from './AdminTemplate.component';
import { FilmsComponent } from './Films.component';
import { UsersComponent } from './Users.component';
//Cấu hình route

const AdminRoute:Routes = [
    {path:'',component:AdminTemplateComponent,children:[
        {path:'users',component:UsersComponent},
        {path:'films',component:FilmsComponent},
    ]
}]




@NgModule({
    declarations:[AdminTemplateComponent],
    imports: [RouterModule.forChild(AdminRoute)],
    exports: [],
})
export class AdminModule { }
