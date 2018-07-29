import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { MainNavComponent } from './main-nav/main-nav.component';

import { OwnerSigninComponent } from './owner-signin/owner-signin.component';
import { OwnerSignupComponent } from './owner-signup/owner-signup.component';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { ClubInfoComponent } from './club-info/club-info.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { PlayersComponent } from './players/players.component';
import { PlayerComponent } from './players/player/player.component';
import { PlayerListComponent } from './players/player-list/player-list.component';


const routes: Routes = [
  { path: '', redirectTo: '/signin', pathMatch: 'full' },//default page
  { path: 'signin', component: OwnerSigninComponent },
  { path: 'dashboard', component: DashboardComponent},
  { path: 'home', component: HomeComponent },
  { path: 'signup', component: OwnerSignupComponent},
  { path: 'clubinfo', component: ClubInfoComponent},
  { path: 'players', component: PlayersComponent},

// This  routs object should be always last
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}

export const routingComponents = [HomeComponent,PageNotFoundComponent,OwnerSigninComponent,
  OwnerSignupComponent,MainNavComponent,SidebarComponent,
  DashboardComponent,ClubInfoComponent,PlayersComponent,PlayerComponent,PlayerListComponent]