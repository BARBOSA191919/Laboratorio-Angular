import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms'; // <-- Agrega esto
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CharacterListComponent } from './components/character-list/character-list.component';  
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroComponent } from './components/hero/hero.component';
import { FooterComponent } from './components/footer/footer.component';
import { ThankYouComponent } from './components/thank-you/thank-you.component';
import { YoutubeCourseComponent } from './components/youtube-course/youtube-course.component';
import { AboutLabsComponent } from './components/about-labs/about-labs.component';
import { ExampleFormComponent } from './components/example-form/example-form.component';

@NgModule({
  declarations: [
    AppComponent,
    CharacterListComponent,
    NavbarComponent,
    HeroComponent,
    FooterComponent,
    ThankYouComponent,
    YoutubeCourseComponent,
    AboutLabsComponent,
    ExampleFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule ,
    ReactiveFormsModule
    
  ],
  providers: [
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
