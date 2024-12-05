import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { LogingPageComponent } from './pages/loging-page/loging-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';


//LOCALHOST:4200/auth/
const routes: Routes=[
  {
      path:'',
      component:LayoutPageComponent,
      children:[
        {path:'login', component: LogingPageComponent},
        {path:'new-account', component: RegisterPageComponent},
        {path:'**', redirectTo:'login'},
      ]

  },
]

@NgModule({
  imports: [ RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
