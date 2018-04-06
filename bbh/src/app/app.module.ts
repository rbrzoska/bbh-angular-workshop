import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomeComponent } from './main/home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './main/contact/contact.component';
import { CoreModule } from './core/core.module';
import { NotificationsModule } from './notifications/notifications.module';
import { TableModule } from './table/table.module';
import { MainModule } from './main/main.module';
import { TestComponent } from './test/test.component';
import { TestDirective } from './test.directive';
import { WizardDemoComponent } from './main/wizard-demo/wizard-demo.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './store/reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { ProductsEffects } from './store/products.effects';
import { ProductsService } from './products/products.service';


const routes: Routes = [
  {path: '', component: HomeComponent, pathMatch: 'full'},
  {path: 'contact', component: ContactComponent},
  {path: 'wizard', component: WizardDemoComponent},
  {path: 'products', loadChildren: 'app/products/products.module#ProductsModule'},
  {path: 'tests', loadChildren: 'app/bbh-tests/bbh-tests.module#BbhTestsModule'},
  {path: '**', redirectTo: '/'}
];

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    TestDirective
  ],
  imports: [
    CoreModule,
    NotificationsModule.forRoot(),
    TableModule.forRoot(),
    BrowserModule,
    MainModule,
    RouterModule.forRoot(routes),
    StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forRoot([ProductsEffects]),
    !environment.production ? StoreDevtoolsModule.instrument() : []
  ],
  providers: [ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule {

}
