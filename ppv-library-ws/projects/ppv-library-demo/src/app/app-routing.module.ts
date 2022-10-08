import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TheMostBasicNgLibraryDemoComponent } from './the-most-basic-ng-library-demo/the-most-basic-ng-library-demo.component';

const routes: Routes = [
  {path:'the-most-basic-ng-library', component:TheMostBasicNgLibraryDemoComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
