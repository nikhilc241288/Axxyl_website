import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FeesTaxesComponent } from './fees-taxes/fees-taxes.component';
import { RegisterComponent } from './register/register.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TermConditionComponent } from './term-condition/term-condition.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { SupportComponent } from './support/support.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
  },
  {
    path: 'AXXYL/pages/taxes',
    component: FeesTaxesComponent,
  },
  {
    path: 'AXXYL/pages/registration',
    component: RegisterComponent,
  },
  {
    path: 'AXXYL/pages/termandcondition',
    component: TermConditionComponent,
  },
  {
    path: 'AXXYL/pages/privacypolicy',
    component: PrivacyPolicyComponent,
  },
  { path: 'AXXYL/pages/support', component: SupportComponent },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
