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

    async iniciarSesion(): Promise<void> {
      // Simular lógica de autenticación (puedes reemplazar esto con tu propia lógica)
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
  
        await alert.present();
      }
    }
  }



