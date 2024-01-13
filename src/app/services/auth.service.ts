// auth.service.ts

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private USER_KEY = 'usuarioRegistrado';

  login(username: string, password: string): boolean {
    //Se almacena al usuario en la constante para poder sustituirla 
    //por los valores de la constante y verificar que el usuario existe
    const existingUser = this.getUserFromLocalStorage();

    return existingUser && existingUser.usuario === username && existingUser.contrasena === password;
  }
  // Obtener la cadena almacenada en el localStorage usando la clave this.USER_KEY
  getUserFromLocalStorage(): any {
    const userString = localStorage.getItem(this.USER_KEY);
    return userString ? JSON.parse(userString) : null;
    // ¿La cadena existe?
    // Si es cierto, entonces parsearla desde JSON y devolver el resultado.
    // Si es falso (la cadena es null o undefined), devolver null.
  }
}
