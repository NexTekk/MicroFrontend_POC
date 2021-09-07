import { loadRemoteModule } from '@angular-architects/module-federation';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BooksComponent } from './books/books.component';


const routes: Routes = [
  {
    path: 'principles',
    loadChildren: () => import('app1/Module').then(m => m.PrinciplesModule)
  },
  // {
  //   path: 'principles',
  //   loadChildren: () => loadRemoteModule({
  //       remoteEntry: 'http://localhost:5001/remoteEntry.js',
  //       remoteName: 'app1',
  //       exposedModule: './Module'
  //     })
  //     .then(m => m.PrinciplesModule)
  // },
  {
    path: 'food',
    loadChildren: () => import('app2/Module').then(m => m.AppModule)
  },
  {
    path: 'books',
    component: BooksComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
