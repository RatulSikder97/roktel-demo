import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthComponent } from "@features/auth/auth.component";

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "auth/login"
  },
  {
    path: 'auth',
    component: AuthComponent,
    loadChildren: () =>
      import('@features/auth/auth.module').then(m => m.AuthModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
