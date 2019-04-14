import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProfileComponent } from './components/profile/profile.component';

import { ValidateService } from './services/validate.service';
import { AuthService } from './services/auth.service';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { AuthGuard } from './guards/auth.guard';
import { AddPlayerComponent } from './components/add-player/add-player.component';
import { PlayersComponent } from './components/players/players.component';
import { AddTournamentComponent } from './components/add-tournament/add-tournament.component';
import { TournamentsListComponent } from './components/tournaments-list/tournaments-list.component';
import { TournamentsService } from './services/tournaments.service';
import { PlayersService } from './services/players.service';
import { EditPlayerComponent } from './components/edit-player/edit-player.component';
import { TournamentComponent } from './components/tournament/tournament.component';


const dashboardRoutes: Routes = [
  {path:'', component: AddTournamentComponent},
  {path:'players', component: PlayersComponent},
  {path:'add-player', component: AddPlayerComponent}
]

const tournamentRoutes: Routes = [
  {path:'', component: TournamentComponent},
  // {path:'', component: TournamentComponent},
  // {path:'', component: TournamentComponent}
]

const appRoutes: Routes = [
  {path:'', component: HomeComponent},
  {path:'register', component: RegisterComponent},
  {path:'login', component: LoginComponent},
  {path:'tournament', component: TournamentComponent, children: tournamentRoutes},
  {path:'dashboard', component: DashboardComponent, canActivate:[AuthGuard], children: dashboardRoutes},
  {path:'profile', component: ProfileComponent, canActivate:[AuthGuard]}
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    DashboardComponent,
    ProfileComponent,
    AddPlayerComponent,
    PlayersComponent,
    AddTournamentComponent,
    TournamentsListComponent,
    EditPlayerComponent,
    TournamentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    FlashMessagesModule.forRoot()
  ],
  providers: [ValidateService, AuthService, AuthGuard, TournamentsService, PlayersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
