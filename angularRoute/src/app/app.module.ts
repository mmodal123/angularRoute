import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';


import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { ActivateGuard } from './activate.guard';
import { UserService } from './user.service';
import { HomeComponent } from './home/home.component';
import {Approutes} from './Routing';
import { MerchantComponent } from './merchant/merchant.component';
import { DeactivateGuard } from './deactivate.guard';
import { CustomerComponent } from './customer/customer.component';


@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    HomeComponent,
    MerchantComponent,
    CustomerComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(Approutes)
  ],
  providers: [
    ActivateGuard,
    UserService,
    DeactivateGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
