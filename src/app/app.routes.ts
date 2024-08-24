import { Routes } from '@angular/router';
import { UserComponent } from './Component/user/user.component';


//set ur routes here
export const routes: Routes = [
{
    path:'',
    redirectTo:'user',
    pathMatch:'full'
},
{
    path:'users',
    component:UserComponent
}

];
