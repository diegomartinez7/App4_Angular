import { Routes } from '@angular/router';
import { ArtistsComponent } from './components/artists/artists.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';

//Exportar una constante que será nuestro arreglo de rutas (paths)
export const ROUTES: Routes = [
    {path: 'artist/:id', component: ArtistsComponent},
    {path: 'home', component: HomeComponent},
    {path: '', pathMatch: 'full', redirectTo: 'home'},
    {path: 'search', component: SearchComponent} 
];
