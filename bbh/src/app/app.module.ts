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

const routes: Routes = [
  {path: '', component: HomeComponent, pathMatch: 'full'},
  {path: 'contact', component: ContactComponent},
  {path: 'products', loadChildren: 'app/products/products.module#ProductsModule'},
  {path: 'tests', loadChildren: 'app/bbh-tests/bbh-tests.module#BbhTestsModule'},
  {path: '**', redirectTo: '/'}
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CoreModule,
    NotificationsModule.forRoot(),
    TableModule.forRoot(),
    BrowserModule,
    MainModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
