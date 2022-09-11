import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from 'src/app/shared/services/session.service';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
})
export class LogoutComponent implements OnInit {

  constructor(
    private readonly sessonService: SessionService,
    private readonly router: Router) { }

  ngOnInit(): void {
    this.sessonService.remove('token');
    this.router.navigateByUrl('');
  }
}