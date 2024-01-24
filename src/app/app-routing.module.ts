import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path : '', redirectTo: '/mobile-mechanic', pathMatch: 'full'
  },
  {
    path : 'mobile-mechanic', component : LandingPageComponent, children : [
      {path: '', component : HomeComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
