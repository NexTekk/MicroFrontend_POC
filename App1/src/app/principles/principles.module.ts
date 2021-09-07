import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { PrinciplesComponent } from "./component/principles.component";
import { PRINCIPLE_ROUTES } from "./principles.routes";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(PRINCIPLE_ROUTES)
  ],
  declarations: [
    PrinciplesComponent
  ]
})
export class PrinciplesModule { }
