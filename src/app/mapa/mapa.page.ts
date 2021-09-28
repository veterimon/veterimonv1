import { Component, OnInit } from '@angular/core';
import { ViewChild, ElementRef } from '@angular/core';

declare var google: any;

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.page.html',
  styleUrls: ['./mapa.page.scss'],
})
export class MapaPage implements OnInit {

  //ATRIBUTOS
  mapa: any;
  janelasInfo: any = [];
  marcadores: any = [ //caso abra mais franquias é só adicionar mais marcadores
    {
      title: "VETERIMON",
      latitude: "-23.546790743730273",
      longitude: "-46.65230463830273"
    }
  ]
  @ViewChild('map', {read: ElementRef, static: false}) mapRef: ElementRef;

  //MÉTODOS
  ionViewDidEnter(){ // ciclo de vida da view
    this.mostrarMapa();
  }

  constructor() { }

  mostrarMapa(){
    const local = new google.maps.LatLng(-23.546790743730273, -46.65230463830273);
    const opcoes = {
      center: local,
      zoom: 15,
      desableDefaultUI: true // desativa o controler de zoom
    }
    this.mapa = new google.maps.Map(this.mapRef.nativeElement, opcoes);
    this.adicionarMarcadoresNoMapa(this.marcadores);
  }

  adicionarMarcadoresNoMapa(marcadores){
    for (let marcador of marcadores){
      let posicao = new google.maps.LatLng(marcador.latitude, marcador.longitude);
      let marcadorNoMapa = new google.maps.Marker({
        position: posicao,
        title: marcador.title,
        latitude: marcador.latitude,
        longitude: marcador.longitude,
        icon: "https://img.icons8.com/ios-filled/48/000000/pointer.png"
      });
      marcadorNoMapa.setMap(this.mapa);
      this.adicionarInfoAoMarcador(marcadorNoMapa);
    }
  }

  adicionarInfoAoMarcador(marcador){
    let conteudoDaJanelaInfo = 
      '<div id="content">' +
        '<h2 id="firstHeading" class"firstHeading">' + marcador.title + '</h2>' +
        '<p>Latitude: ' +marcador.latitude + '</p>' +
        '<p> Longitude: ' + marcador.longitude + '</p>' +
        '<ion-button id="navigate">Navigate</ion-button>'
      '</div>';
    let janelaInfo = new google.maps.infoWindow({
      content: conteudoDaJanelaInfo
    });
    marcador.addListener('click', () => {
      this.fecharTodasJanelasInfo();
      janelaInfo.open(this.mapa, marcador);
    });
    this.janelasInfo.push(janelaInfo);
  }

  fecharTodasJanelasInfo(){
    for (let janela of this.janelasInfo){
      janela.close();
    }
  }

  ngOnInit() {
  }

}