import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  user : any;

  constructor(
    private router:Router,
    private auth : AuthService
  ) { }

  ngOnInit(): void {
    this.user=localStorage.getItem('email')
    console.log(this.user)
  }

  navigate(val: any){
    this.router.navigate([`/dashboard/${val}`])
  }

  logout(){
    this.auth.signOut().then(res=>{
      localStorage.clear();
      this.router.navigate(['/login'])
    })
  }
}
