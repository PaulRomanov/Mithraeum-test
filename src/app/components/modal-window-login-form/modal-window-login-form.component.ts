import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { AppComponent } from 'src/app/app.component';
import { User } from 'src/app/interfaces/interfaces';
import { AuthService } from 'src/app/services/auth.service';
import { ModalWindowService } from 'src/app/services/modal-window.service';

@Component({
  selector: 'app-modal-window-login-form',
  templateUrl: './modal-window-login-form.component.html',
  styleUrls: ['./modal-window-login-form.component.scss']
})
export class ModalWindowLoginFormComponent implements OnInit {

  public form!: FormGroup;
  public aSub: Subscription = new Subscription;

  constructor(
    public modalWindowService: ModalWindowService,
    public authService: AuthService,
    public appComponent: AppComponent,
    public router: Router,
    public route: ActivatedRoute
    ) { }

    ngOnInit(): void {
      this.form = new FormGroup({
        email: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl(null, [Validators.required, Validators.minLength(3)]),
      })
    }

  public login(): void {

    this.form.disable()

    const user: User = {
      email: this.form.value.email,
      password: this.form.value.password,
    }

    this.aSub = this.authService.login(this.form.value.email, this.form.value.password).subscribe(
      () => {
        this.router.navigate([''])
        this.modalWindowService.closeModal()
      },

      error => {
        console.warn(error)
        this.form.enable()
      }
    )
  }

  public closeModal(): void {
    this.modalWindowService.closeModal();
  }

}
