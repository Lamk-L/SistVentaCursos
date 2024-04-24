import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ClienteListComponent } from './components/clientes/cliente-list/cliente-list.component';
import { ClienteAddComponent } from './components/clientes/cliente-add/cliente-add.component';
import { ClienteEditComponent } from './components/clientes/cliente-edit/cliente-edit.component';
import { CursoListComponent } from './components/cursos/curso-list/curso-list.component';
import { CursoAddComponent } from './components/cursos/curso-add/curso-add.component';
import { CursoEditComponent } from './components/cursos/curso-edit/curso-edit.component';

const routes : Routes = [
  {path: '', component:HomeComponent},
  {path: 'clientes', component: ClienteListComponent},
  {path: 'cliente/add', component:ClienteAddComponent},
  {path: 'cliente/edit/:id', component: ClienteEditComponent},
  {path: 'cursos', component: CursoListComponent},
  {path: 'curso/add', component: CursoAddComponent},
  {path: 'curso/edit/:id', component: CursoEditComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ClienteListComponent,
    ClienteAddComponent,
    ClienteEditComponent,
    HomeComponent,
    CursoListComponent,
    CursoAddComponent,
    CursoEditComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
