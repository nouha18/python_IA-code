import { Component, OnInit } from '@angular/core';
import {LoginsService} from '../logins.service';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    submitted: false;
    loginForm : FormGroup;

  constructor( private loginService : LoginsService,private routes : Router,private formBuilder : FormBuilder) { }

          ngOnInit() {
          this.loginForm = this.formBuilder.group({
          email: ['', Validators.required],
          password: ['', Validators.required],
          confirmPassword: ['', Validators.required]
          });
         }
      loginto(){
      //this.submitted = true;
      localStorage.setItem('connected','1');
      let formdata = new FormData();
          console.log('email',this.loginForm.value.email);
          formdata.append("email",'user4@gmail.com');
          formdata.append("password",this.loginForm.value.password);
          formdata.append("confirmPassword",this.loginForm.value.confirmPassword);
          console.log('login data',this.loginForm.value);
          if(this.loginForm.invalid){
              return;
              localStorage.setItem('loggedOut','false');
          }
          this.loginService.loginto(this.loginForm.value).subscribe(resp =>
          {
              console.log(resp);
              console.log('user logged added successfully',resp['message']);
              //role : localStorage.setItem('user',JSON.stringify(resp['data']['user']['--t']['role']));
              localStorage.setItem('loggedIn','true');
              localStorage.setItem('user',JSON.stringify(resp['data']['user']));
              this.routes.navigate(['/home']);
          });
          //localStorage['email'] = '';
  }
        isActiveToggleTextPassword = true;
        public toggleTextPassword(): void {
        this.isActiveToggleTextPassword = (this.isActiveToggleTextPassword !== true);
        }
        getType() {
        return this.isActiveToggleTextPassword ? 'password' : 'text';
        }

      onReset() {
          this.submitted = false;
          this.loginForm.reset();
      }
}



