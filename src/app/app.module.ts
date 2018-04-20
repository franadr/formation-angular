import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
// Modules
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { SuperheroModule } from './component/superhero/superhero.module';
import { AppComponent } from './app.component';
import {appRoutes} from './app.routing';
import {LoginModule} from './component/login/login.module';
import {AuthGuardGuard} from './shared/guards/auth-guard.guard';
import {AddHeaderInterceptor} from './shared/Interceptor/header.interceptor';
import {MainModule} from './component/main/main/main.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SharedModule,
    CoreModule,
    SuperheroModule,
    LoginModule,
    MainModule,
    appRoutes
  ],
  providers: [AuthGuardGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AddHeaderInterceptor,
      multi: true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
