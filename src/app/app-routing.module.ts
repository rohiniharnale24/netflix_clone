import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviedashboardComponent } from './shared/component/moviedashboard/moviedashboard.component';
import { MoviedetailComponent } from './shared/component/moviedetail/moviedetail.component';

const routes: Routes = [
  {
    path: '',
    component: MoviedashboardComponent,
  },
  {
    path: 'movieDetail/:movieId',
    component: MoviedetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
