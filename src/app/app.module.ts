import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes, Router } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SettingsComponent } from './components/settings/settings.component';
import { GameComponent } from './components/game/game.component';
import { GameListComponent } from './components/game/game-list/game-list.component';
import { GameProfileComponent } from './components/game/game-profile/game-profile.component';
import { TeamComponent } from './components/team/team.component';
import { TeamListComponent } from './components/team/team-list/team-list.component';
import { TeamProfileComponent } from './components/team/team-profile/team-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SettingsComponent,
    GameComponent,
    GameListComponent,
    GameProfileComponent,
    TeamComponent,
    TeamListComponent,
    TeamProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
