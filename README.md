# myApp
Proyecto en IONIC para el desarrollo de App Movil

## Ediciones para consumir API REST PUBLICA
1. Seleccionar el end point de la API
```
https://rickandmortyapi.com/api/character
```
2. Crear pagina contenedora de lo que se desea mostrar
```
ionic g page nombre_pagina
```
3. Agregar el import en el modulo que usaras la API
```
import { HttpClientModule } from '@angular/common/http';
```
4. Usar la clase importada en el @NgModule
```
@NgModule({
  imports: [
    ...,
    ...,
    ...,
    ...,
    HttpClientModule
  ],
  declarations: [HomePage]
})
```
6. Crear una inerfaz para editar las vistas (se realiza bajo el import
```
import { ... } from '...';

interface Character {
  name: string;
  image: string;
  id: string;
  species: string;
}

```
5. Crear el arreglo contenedor de los personajes que entregará la API (bajo la definicion de la clase)
```
export class Clase implements OnInit {
  personajes: Character[] = [];
  ...
  ...
}
```
6. En el metodo ngOnInit() agregar la llamada al end point y pasar los objetos JSON a objetos TypeScript
```
 this.httpClient.get<any>('https://rickandmortyapi.com/api/character')
  .subscribe((res: any) => {
    console.log(res);
    this.personajes = res.results as Character[]; // Usar la interfaz Character
  });
```
7. En la vista HTML crear el contenedor para consumir la informacion de los objetos
```
<ion-item class="item" *ngFor="let personaje of personajes" >
  <ion-avatar aria-hidden="true" class="imagen" slot="start">
    <img src="{{ personaje.image }}" alt="">  <!-- muestra la imagen del objeto results-->
  </ion-avatar>
  <ion-label>{{ personaje.name }}</ion-label>  <!-- muestra el nobmre del objeto results-->
</ion-item>
```


## Ediciones para agregar Mapa
1. Obtener la llave de Google Maps https://console.cloud.google.com
   - Crear nuevo proyecto
   - Habilitar API JavaScript Google Maps
   - Obtener las credenciales API KEY
2. Crear pagina contenedora del Mapa
```
ionic g page nombre_pagina
```
3. Agregar en el index.html de la App el script y reemplazarlo por la key obtenida en el paso 1.3
```
<script src="https://maps.googleapis.com/maps/api/js?key=CAMBIAR_POR_LA_KEY_OBTENIDA&callback=initMap"></script>
```
4. Agregar en la pagina html una etiqueta div
```
  <ion-content>
    <div id="map"></div>
  </ion-content>
```
5. Agregar la clase CSS en el archivo page.scss a la etiqueta div con el id #map
```
#map {
    height: 100%;
  }
```
6. Agregar comportamiento al ts de la pagina del Mapa
bajo el import
```
declare var google: any; 
```
bajo la clase
```
map: any;
```

en el metodo ngOnInit()
```
ngOnInit() {
  this.initMap();
}
```

y luego agregar el metodo para iniciar el mapa
```
initMap() {
    var myLatlng = new google.maps.LatLng(-33.68142157785643,-71.22594634660035);
    
    var mapOptions = {
      zoom: 16,
      center: myLatlng
    }
    var map = new google.maps.Map(document.getElementById("map"), mapOptions);
    
    var marker = new google.maps.Marker({
        position: myLatlng
    });
    
    marker.setMap(map);
  }
```

Si la pagina se llama mapa, quedaria un archivo similiar a este
```
import { Component, OnInit } from '@angular/core';

declare var google: any;

@Component({
  selector: 'app-borrar',
  templateUrl: './borrar.page.html',
  styleUrls: ['./borrar.page.scss'],
})
export class BorrarPage implements OnInit {

  map: any;

  constructor() { }

  ngOnInit() {
    this.initMap();
  }

  initMap() {
    var myLatlng = new google.maps.LatLng(-33.68142157785643,-71.22594634660035);
    
    var mapOptions = {
      zoom: 16,
      center: myLatlng
    }
    var map = new google.maps.Map(document.getElementById("map"), mapOptions);
    
    var marker = new google.maps.Marker({
        position: myLatlng
    });
    
    marker.setMap(map);
  }
}
```  
