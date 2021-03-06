import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";

export const APP_ROUTES: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'new',
    loadChildren: () => import('./principles/principles.module').then(m => m.PrinciplesModule)
  },
]
