import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private navCtrl: NavController) {}

  irALogin(): void {
    this.navCtrl.navigateForward('/login');
  }

  irARegister(): void {
    this.navCtrl.navigateForward('/register');
  }
}
