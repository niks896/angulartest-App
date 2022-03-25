import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private auth: AngularFireAuth
  ) { }

  islogin({ email, password }: any) {
    return this.auth.signInWithEmailAndPassword( email, password);
  }

  isSignUp({ email, password }: any) {
    return this.auth.createUserWithEmailAndPassword( email, password);
  }

  signOut(){
    return this.auth.signOut();
  }

}
