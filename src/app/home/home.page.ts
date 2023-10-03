import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { AnimationController } from '@ionic/angular';

interface Character {
  name: string;
  image: string;
  id: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})

export class HomePage implements OnInit {
  @ViewChild("titulo", { read: ElementRef, static: true }) titulo!: ElementRef;
  personajes: Character[] = [];

  nombreUsuario = localStorage.getItem('nombreUsuario');

  constructor(
    private animationCtrl: AnimationController, 
    private httpClient: HttpClient
  ) { }

  ngOnInit() {
    this.crecer();
    this.httpClient.get<any>('https://rickandmortyapi.com/api/character')
    .subscribe((res: any) => {
      console.log(res);
      this.personajes = res.results as Character[]; // Usar la interfaz Character
    });
  }

  public avanzarDerecha() {
    const animation = this.animationCtrl
      .create()
      .addElement(this.titulo.nativeElement)
      .duration(2000)
      .iterations(Infinity)
      .fromTo('transform', 'translateX(0px)', 'translateX(200px)')
      .fromTo('color', "blue", "red")
      .fromTo('opacity', '1', '0');

    animation.play();
  }

  public crecer() {
    const animation = this.animationCtrl
      .create()
      .addElement(this.titulo.nativeElement)
      .duration(2000)
      .iterations(Infinity)
      .fromTo('transform', 'scale3d(1,1,1)', 'scale3d(1.5,1.5,1.5)')
      .fromTo("color", "green", "blue")
      .fromTo('opacity', '1', '0');

    animation.play();
  }

}
