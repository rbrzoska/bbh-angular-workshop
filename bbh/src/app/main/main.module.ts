import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { NotificationsModule } from '../notifications/notifications.module';
import { SharedModule } from '../shared/shared.module';
import { WizardDemoComponent } from './wizard-demo/wizard-demo.component';
import { StepComponent } from './wizard-demo/step.component';
import { Step1Component } from './wizard-demo/step1.component';

@NgModule({
  imports: [
    CommonModule,
    NotificationsModule,
    SharedModule
  ],
  declarations: [
    HomeComponent,
  ContactComponent,
  WizardDemoComponent,
  StepComponent,
  Step1Component]
})
export class MainModule { }
