import { Routes } from '@angular/router';
import { Contato } from './componentes/contato/contato';
import { Header } from './componentes/header/header';
import { Home } from './componentes/home/home';
import { Footer } from './componentes/footer/footer';
import { Projetos } from './componentes/projetos/projetos';
import { SideBar } from './componentes/side-bar/side-bar';


export const routes: Routes = [

    { path: 'contato', component: Contato },
    { path: 'home', component: Home },
    { path: 'projetos', component: Projetos },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    {path: 'side-bar', component: SideBar}
];
