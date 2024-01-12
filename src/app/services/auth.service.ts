// auth.service.ts

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private USER_KEY = 'usuarioRegistrado';

  login(username: string, password: string): boolean {
    // Simular lógica de autenticación (puedes reemplazar esto con tu propia lógica)
    const existingUser = this.getUserFromLocalStorage();

    return existingUser && existingUser.usuario === username && existingUser.contrasena === password;
  }

  getUserFromLocalStorage(): any {
    const userString = localStorage.getItem(this.USER_KEY);
    return userString ? JSON.parse(userString) : null;
  }
}
