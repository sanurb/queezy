import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@modules/auth/services/auth.service';

@Component({
  selector: 'app-header-user',
  templateUrl: './header-user.component.html',
  styleUrls: ['./header-user.component.scss'],
})
export class HeaderUserComponent implements OnInit {
  menuToggleOpen: boolean = false;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  logout() {
    this.authService.logout().subscribe(() => {
      this.router.navigate(['play']);
    });
  }
}
