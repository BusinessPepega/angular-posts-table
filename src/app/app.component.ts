import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'postsTable';
  constructor(private authService: AuthService){}
  
  login(){
    this.authService.login()                    
  }
  
  logout(){
    this.authService.logout()      
  }
}
