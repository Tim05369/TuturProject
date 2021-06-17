import { Component, OnInit } from '@angular/core';
import {AuthService} from "../services/authentification/auth.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  public loginInvalid = false;

  constructor(private fb:FormBuilder,
              private authService: AuthService,
              private router: Router) {
    this.form = this.fb.group({
        username: ['',Validators.required],
      password: ['',Validators.required]
    });
  }

  login() {
    const val = this.form.value;
    if (val.username && val.password) {
      this.authService.login(val.username, val.password)
          .subscribe(
              (data) => {
                localStorage.setItem("jwt", data);
                this.router.navigateByUrl('/');
              }
          );
    }
  }

  ngOnInit(): void {
  }

}
