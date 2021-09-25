import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage {

  public alertController: AlertController;


  constructor(alert: AlertController) {
    this.alertController = alert;
  }


  async presentAlert(): Promise<void> {

    const alerta = await this.alertController.create({
      header: 'Cadastro criado com sucesso!',
      message: 'Faça seu login!',
      buttons: ['OK']
      
    });


    alerta.present();
  }

}

