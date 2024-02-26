import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TopbarComponent } from './component/topbar/topbar.component';
import { FooterComponent } from './component/footer/footer.component';

const routes: Routes = [
  {
    path: "topbar",
    component: TopbarComponent
  },
  {
    path: "footer",
    component: FooterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
