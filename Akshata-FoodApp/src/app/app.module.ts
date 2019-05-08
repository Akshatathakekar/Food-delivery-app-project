import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.route';
// import { OrderModule } from 'src/order/order.module';
import { WelcomeComponent } from './welcome.component';
import { CustomerModule } from './customer/customer.module';
import { HttpClient } from 'selenium-webdriver/http';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { WelcomeService } from './welcome.service';
// import { DishComponent } from 'src/order/dish.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,

    // DishComponent
    
    
  ],
  imports: [
    BrowserModule,
    CustomerModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
    
  ],
  providers: [WelcomeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
