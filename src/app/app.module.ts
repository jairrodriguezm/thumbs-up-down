import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

// Components
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { RulingsComponent } from './components/rulings/rulings.component';
import { VoteCardComponent } from './components/vote-card/vote-card.component';

//PrimeNg Components
import {DropdownModule} from 'primeng/dropdown';
import { PercentagePipe } from './shared/pipes/percentage.pipe';
import { TimePipe } from './shared/pipes/time.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RulingsComponent,
    VoteCardComponent,
    PercentagePipe,
    TimePipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    DropdownModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
