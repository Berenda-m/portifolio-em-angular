import { Routes } from '@angular/router';
import { Contato } from './componentes/contato/contato';
import { Header } from './componentes/header/header';
import { Home } from './componentes/home/home';
import { Footer } from './componentes/footer/footer';
import { Projetos } from './componentes/projetos/projetos';
import { SideBar } from './componentes/side-bar/side-bar';
import { Login } from './componentes/login/login';
import { Alunos } from './componentes/alunos/alunos';
import { FormularioExercicios } from './componentes/formulario-exercicios/formulario-exercicios';
import { ExercicioPut } from './componentes/exercicio-put/exercicio-put';


export const routes: Routes = [

    { path: 'contato', component: Contato },
    { path: 'home', component: Home },
    { path: 'projetos', component: Projetos },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    {path: 'side-bar', component: SideBar},
    {path: 'login', component: Login},
    {path: 'alunos', component: Alunos},
    {path: 'formularios-exercicios', component: FormularioExercicios},
    {path:'exercicios-put', component: ExercicioPut}
];
