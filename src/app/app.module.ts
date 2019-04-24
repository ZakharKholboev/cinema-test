import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/modules/shared.module';
import { StoreModule } from '@ngrx/store';
import { storeReducers } from './shared/ngrx-store/state/initial.store';
import { MoviesPageComponent } from './movies-page/movies-page.component';
import { HeadPanelComponent } from './movies-page/head-panel/head-panel.component';
import { MoviesListComponent } from './movies-page/movies-list/movies-list.component';
import { MovieComponent } from './movies-page/movie/movie.component';
import { MoviesService } from './shared/services/movies.service';
import { BuyTicketComponent } from './movies-page/movie/buy-ticket/buy-ticket.component';
import { TicketService } from './shared/services/ticket.service';


@NgModule({

  declarations: [
    AppComponent,
    MoviesPageComponent,
    HeadPanelComponent,
    MoviesListComponent,
    MovieComponent,
    BuyTicketComponent
  ],

  imports: [
    BrowserAnimationsModule,
    SharedModule,
    AppRoutingModule,
    StoreModule.forRoot(storeReducers)
  ],

  providers: [
    MoviesService,
    TicketService
  ],

  bootstrap: [AppComponent]

})
export class AppModule {}
