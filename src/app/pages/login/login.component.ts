import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModalService } from 'src/app/core/services/prod/component-specific/modal.service';
import { Authentification } from 'src/app/shared/classes/models/back-end-communication/authentification';
import { IAuthentification } from 'src/app/shared/interfaces/services-interfaces/i-authentification';

@Component({
  selector: 'page-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private auth: IAuthentification,
    private router: Router,
    private modal: ModalService
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
      this.router.navigateByUrl('/carScanner');
    } else {
      this.modal.openErrorModal(
        'Wrong Password or Username',
        'Authentification Error'
      );
    }
  }
}
