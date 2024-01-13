import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-reset-pass',
  templateUrl: './reset-pass.page.html',
  styleUrls: ['./reset-pass.page.scss'],
})
export class ResetPassPage {
  email: any;
  newPassword: string;

  constructor(
    private router: Router,
    private alertController: AlertController) {
    // Recuperar el correo electrónico del localStorage (asegúrate de almacenarlo previamente)
    this.email = localStorage.getItem('userEmail');
  }

  async resetPassword(): Promise<void> {

    // Mostrar el popup
    const alert = await this.alertController.create({
      header: 'Éxito',
      message: 'Correo enviado con éxito',
      buttons: [
        {
          //El handler es una función que se ejecuta cuando el usuario hace clic en ese botón específico.
          text: 'OK',
          handler: () => {
            // Redirige a la página de inicio de sesión al hacer clic en OK
            this.router.navigate(['/login']);
          },
        },
      ],
    });

    await alert.present();
  }
}

