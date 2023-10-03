import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Share } from '@capacitor/share';
import { MenuController } from '@ionic/angular'; 

//npm install @capacitor/share
//npx cap sync

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inicio', url: '/home', icon: 'home' },
    { title: 'Contacto', url: '/contact', icon: 'mail' },
  ];

  constructor(public router: Router, private menu: MenuController)  { }

  compartirApp() {
    Share.share({
      title: 'Compartir myApp',
      url: 'https://bilbaolabs.cl/',
      dialogTitle: 'Es perfecta !',
    });
  }

  abrirMapa() {
    this.router.navigate(["/mapa"]);
    this.menu.close();
  }

  cerrarSesion(){
    localStorage.removeItem('autenticado');
    this.router.navigate(["/ingreso"]);
    this.menu.close();
  }
}
