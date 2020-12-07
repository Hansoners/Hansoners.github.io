import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  NbThemeModule, NbLayoutModule,
  NbCardModule, NbIconModule, NbButtonModule, NbBadgeModule, NbChatModule, NbSpinnerModule
} from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { HttpClientModule } from '@angular/common/http';
import { ChatComponent } from './chat/chat.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LottieModule } from 'ngx-lottie';
import player from 'lottie-web/build/player/lottie_svg';
import { AngularTypewriterEffectModule } from 'angular-typewriter-effect';
import {NgxTypedJsModule} from 'ngx-typed-js';

export function playerFactory() {
  return player;
}

@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    HomepageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NbIconModule,
    NbButtonModule,
    NbBadgeModule,
    NbChatModule,
    HttpClientModule,
    NbSpinnerModule,
    AngularTypewriterEffectModule,
    NgxTypedJsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
