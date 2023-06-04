import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private isAuthenticatedSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public isAuthenticated$ = this.isAuthenticatedSubject.asObservable();

  constructor() { }

  // Método para simular el inicio de sesión y establecer el estado de autenticación
  login(username: string, password: string): boolean {
    // Lógica de autenticación real aquí (puede ser una llamada a una API, verificación de credenciales, etc.)
    if (username === 'steven' && password === '123456') {
      this.isAuthenticatedSubject.next(true);
      return true;
    }
    return false;
  }

  // Método para verificar si el usuario está autenticado
  isLoggedIn(): boolean {
    return this.isAuthenticatedSubject.getValue();
  }

  // Método para cerrar sesión y restablecer el estado de autenticación
  logout(): void {
    this.isAuthenticatedSubject.next(false);
  }
}
