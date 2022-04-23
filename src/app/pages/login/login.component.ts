import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Authentification } from 'src/app/shared/classes/back-end-communication/authentification';
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
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  ngOnInit() {}

  async login(event: Event) {
    event.preventDefault();
    const values = this.form.value;

    const auth: Authentification = new Authentification(
      values.username,
      values.password
    );

    const authResult: boolean = await this.auth.authenticate(auth);

    if (authResult) {
      //TODO setting the token and shit
      //TODO setting of the token should init the Delivery Store
      this.router.navigateByUrl('/carScanner');
    } else {
      throw Error('Wrong Password or Username');
    }
  }
}
