import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { MeComponent } from './about/me/me.component';
import { UsComponent } from './about/us/us.component';
import { YouComponent } from './about/you/you.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path:'', redirectTo: '/home', pathMatch:'full' },
  { path:'home', component: HomeComponent },
  { path:'about', component: AboutComponent,
      children: [
        { path: 'me', component: MeComponent },
        { path: 'you', component: YouComponent },
        { path: 'us', component: UsComponent },
        { path: 'us/:description', component: UsComponent }
      ]
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
