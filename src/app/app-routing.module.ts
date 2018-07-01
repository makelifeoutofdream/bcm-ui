import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { OwnerSigninComponent } from './owner-signin/owner-signin.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes: Routes = [
  { path: '', redirectTo: '/signin', pathMatch: 'full' },//default page
  { path: 'signin', component: OwnerSigninComponent },
  { path: 'home', component: HomeComponent },


// This  routs object should be always last
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}

export const routingComponents = [HomeComponent,PageNotFoundComponent]