import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { ServicesComponent } from './services/services.component';
import { OngoingComponent } from './components/ongoing/ongoing.component';
import { CompletedComponent } from './components/completed/completed.component';
import { CareersComponent } from './careers/career.component';
import { ContactComponent } from './components/contact/contact.component';
import { UpdatesComponent } from './components/updates/updates.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'ongoing', component: OngoingComponent },
  { path: 'completed', component: CompletedComponent },
  { path: 'careers', component: CareersComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'updates', component: UpdatesComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }