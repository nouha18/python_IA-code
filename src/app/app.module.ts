import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { HttpClientModule,HttpClient } from '@angular/common/http';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ComponentsModule } from './components/components.module';
import { AccountsModule } from './account/account.module';
import { ProductComponent } from './product/product.component';
import { LoginComponent } from './login/login.component';
import {LoginsService} from './logins.service';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    ProductComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    RouterModule,
      ModalModule.forRoot(),
      HttpClientModule,
      FormsModule,ReactiveFormsModule,
    ComponentsModule,
    AccountsModule,
    AppRoutingModule,
  ],
  providers: [LoginsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
