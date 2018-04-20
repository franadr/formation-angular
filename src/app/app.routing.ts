
import {RouterModule, Routes} from '@angular/router';
import {HeroListComponent} from './component/superhero/superhero-list/superhero-list.component';
import {SuperheroDetailComponent} from './component/superhero/superhero-detail/superhero-detail.component';
import {LoginComponent} from './component/login/login/login.component';
import {AuthGuardGuard} from './shared/guards/auth-guard.guard';
import {MainComponent} from './component/main/main/main.component';

const  routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'heroes', component: MainComponent, canActivate: [AuthGuardGuard]},
  {path: 'heroes/:id', component: SuperheroDetailComponent, canActivate: [AuthGuardGuard]},
  // otherwize redirect
  {path: '**', redirectTo: 'heroes', canActivate: [AuthGuardGuard]}
];

export const appRoutes = RouterModule.forRoot(routes);


