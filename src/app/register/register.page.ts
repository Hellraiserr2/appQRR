// register.page.ts

import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: 'register.page.html',
  styleUrls: ['register.page.scss'],
})
export class RegisterPage {
  nombre: string;
  apellido: string;
  usuario: string;
  correo: string;
  contrasena: string;

  constructor(private navCtrl: NavController) {}

  registrar(): void {
    // Validar que todos los campos estén llenos
    if (this.nombre && this.apellido && this.usuario && this.correo && this.contrasena) {
      // Crear un objeto con la información del usuario
      const newUser = {
        nombre: this.nombre,
        apellido: this.apellido,
        usuario: this.usuario,
        correo: this.correo,
        contrasena: this.contrasena,
      };

      // Almacenar el usuario en localStorage En general, 
      //JSON.stringify se utiliza para serializar objetos
      // JavaScript a formato JSON, lo cual es comúnmente 
      //necesario cuando trabajas con almacenamiento de datos o
      //intercambio de datos entre cliente y servidor
      localStorage.setItem('usuarioRegistrado', JSON.stringify(newUser));

      // Redirigir a la página de inicio de sesión u otra página
      this.navCtrl.navigateForward('/login');
    } else {
      // Mostrar un mensaje de error si algún campo está vacío
      console.error('Por favor, complete todos los campos.');
    }
  }
}
