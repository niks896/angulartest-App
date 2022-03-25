import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup | any;

  constructor(
    private fb: FormBuilder,
    private auth : AuthService,
    private router : Router,
    private authanticate : AngularFireAuth
  ) {

    this.authanticate.authState.subscribe((res => {
      console.log(res)
      if(res?.email){
        this.router.navigate(['/dashboard'])
      }
    }))
   }

  ngOnInit(): void {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  get email() {
    return this.form.get('email');
  }

  get password() {
    return this.form.get('password');
  }

  onSubmit() {
    console.log( this.form.value)
    this.auth.islogin(this.form.value).then((res : any) => {
      localStorage.setItem('email', res['user'].multiFactor['user'].email)
      this.router.navigate(['/dashboard'])
    }).catch(err => {
      console.log(err)
    })
  }

}
