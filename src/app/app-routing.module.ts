import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateThoughtsComponent } from './components/thoughts/create-thoughts/create-thoughts.component';
import { ListThoughtsComponent } from './components/thoughts/list-thoughts/list-thoughts.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'listThoughts',
    pathMatch: 'full'
  },
  {
  path: 'createThoughts',
  component: CreateThoughtsComponent
},
{
  path: 'listThoughts',
  component: ListThoughtsComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
