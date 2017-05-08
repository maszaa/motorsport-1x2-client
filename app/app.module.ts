import { NgModule }      from '@angular/core';
import { RouterModule }   from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';

import { AppComponent }  from './app.component';
import { HomeComponent }  from './components/home.component';
import { SeriesComponent }  from './components/series.component';
import { SeriesService }  from './services/series.service';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'series',
        component: SeriesComponent
      }
    ])],
  declarations: [
                AppComponent,
                HomeComponent,
                SeriesComponent
                ],
  bootstrap: [AppComponent],
  providers: [SeriesService]

})
export class AppModule {}
