import { Component } from '@angular/core';
import { NavController, AlertController} from '@ionic/angular';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss'],
})
export class LoginPage {
  usuario: string = '';
  contrasena: string = '';

  constructor(
    private navCtrl: NavController, 
    private authService: AuthService,
    private alertController: AlertController) {}
    //utiliza JSON.stringify(newUser) para convertir 
    //ese objeto a una representación en formato JSON. 
    //La variable newUserJSON contendrá una cadena de 
    //texto que representa la estructura y valores del objeto newUser en formato JSON.
    //el formato JSON sirve para almacenar los datos del local storage
    async iniciarSesion(): Promise<void> {
      // Simular lógica de autenticación 
      if (this.authService.login(this.usuario, this.contrasena)) {
        // Inicio de sesión exitoso, redirigir a la página de inicio
        this.navCtrl.navigateRoot('/pagina-inicio');
      } else {
        // Credenciales incorrectas, mostrar pop-up de error
        const alert = await this.alertController.create({
          header: 'Error',
          message: 'Credenciales inválidas. Por favor, inténtalo de nuevo.',
          buttons: ['OK'],
        });
         // El código aquí se ejecutará después de que la promesa se haya resuelto
        await alert.present();
      }
    }
    olvidoContrasena(): void {
      // Puedes redirigir a una página específica para restablecer la contraseña
      // o realizar cualquier otra acción necesaria.
      this.navCtrl.navigateForward('/reset-pass');
    }
  }



