import { Routes } from '@angular/router';
import { Contato } from './componentes/contato/contato';
import { Header } from './componentes/header/header';
import { Home } from './componentes/home/home';
import { Footer } from './componentes/footer/footer';

export const routes: Routes = [

    { path: 'contato', component: Contato },
    { path: 'home', component: Home },
    { path: '', redirectTo: 'home', pathMatch: 'full' }




];
