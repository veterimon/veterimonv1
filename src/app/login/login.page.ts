import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  public alertController: AlertController;


  constructor(alert: AlertController) {
    this.alertController = alert;
  }


  async presentAlert(): Promise<void> {

    const alerta = await this.alertController.create({
      header: 'Login feito com sucesso!',

      buttons: ['OK']
    });


    alerta.present();
  }

}
