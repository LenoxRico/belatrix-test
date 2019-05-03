import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MzButtonModule, MzInputModule } from 'ngx-materialize';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes),MzButtonModule,MzInputModule,],
  exports: [RouterModule]
})
export class AppRoutingModule { }
