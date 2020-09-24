import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserLogin } from 'src/models/userLogin';
import { LoginServiceService } from './service/login-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formLogin: FormGroup;
  loginUser: UserLogin = new UserLogin();
  loading: boolean = false;
  errorValidation: boolean = false;

  constructor(
    private fb: FormBuilder,
    private _loginServiceService: LoginServiceService
    ) { }

  ngOnInit(): void {
    this.formLogin = this.fb.group({
      user: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  /**
   * submit the form formLogin and validate the user
   */
  onSubmit() {
    this.errorValidation = false;
    this.loginUser.username = this.formLogin.get('user').value;
    this.loginUser.password = this.formLogin.get('password').value;
    this.loading = true;
    this._loginServiceService.validateUser(this.loginUser).subscribe(x => {
      if (x){
        console.log(x);

      }else {
        this.errorValidation = true;
      }
      this.loading = false;
    });

  }

}
