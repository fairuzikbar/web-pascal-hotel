import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { Observable, Observer } from 'rxjs';
import { SessionService } from 'src/app/shared/services/session.service';
import { Login, LoginToken } from '../model/login.model';

const AUTH_KEY = 'token';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    constructor(
        private readonly sessionService: SessionService,
        private readonly router: Router
    ) { }
    login(payload: Login): Observable<LoginToken | null> {
        return new Observable<LoginToken | null>((observer: Observer<LoginToken | null>) => {
            try {
                const { email, password } = payload;
                if (email === 'admin@gmail.com' && password === 'password') {
                    const token: LoginToken = { token: '12345' };
                    this.sessionService.set(AUTH_KEY, JSON.stringify(token));
                    observer.next(token);
                    this.router.navigateByUrl('/booking/list');
                } else {
                    observer.next(null);
                }
            } catch (error) {
                observer.error(error);
            }
            observer.complete();
        })
    }
}
