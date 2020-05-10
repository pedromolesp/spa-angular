import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { SearchComponent } from './components/search/search.component';

const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'heroes', component: HeroesComponent },
    { path: 'search/:termino', component: SearchComponent },

    { path: 'heroe/:id', component: HeroeComponent },


    { path: '**', pathMatch: 'full', redirectTo: 'home' }


];
export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, { useHash: true });
