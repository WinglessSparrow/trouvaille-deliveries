import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Authentification } from 'src/app/shared/classes/authentification';
import { AuthentificationServiceModel } from 'src/app/shared/models/authentification-service-model';

@Component({
  selector: 'page-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private auth: AuthentificationServiceModel,
    private router: Router
  ) {
    this.form = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  ngOnInit() {}

  async login(event: Event) {
    event.preventDefault();
    const values = this.form.value;

    const auth: Authentification = new Authentification(
      values.email,
      values.password
    );

    const authResult: Boolean = this.auth.logIn(auth);

    if (authResult) {
      this.router.navigateByUrl('/carScanner');
    }
  }
}
