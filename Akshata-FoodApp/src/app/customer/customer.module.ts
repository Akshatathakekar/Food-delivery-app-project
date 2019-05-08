import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { CustomerRoutes } from './customer.routes';
import { ProfileDetailsComponent } from './profile-details.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';
// import { CustomerService } from './customer.service';


@NgModule({

    declarations:[
        // CustomerLoginComponent,
        ProfileDetailsComponent,
    ],
    exports:[
        // CustomerLoginComponent,
        ProfileDetailsComponent,
        // CustomerSignUpComponent
    ],
    imports:[
        BrowserModule,
        HttpClientModule,
        FormsModule,

        RouterModule.forChild(CustomerRoutes),

    ],
    //  providers:[CustomerService]
})
export class CustomerModule{

}