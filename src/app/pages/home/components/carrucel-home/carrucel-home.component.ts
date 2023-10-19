import { Component, OnInit } from '@angular/core';
import { CarrucelEnum } from 'src/app/enums/enums-carrucel-home';

@Component({
  selector: 'app-carrucel-home',
  templateUrl: './carrucel-home.component.html',
  styleUrls: ['./carrucel-home.component.scss']
})
export class CarrucelHomeComponent implements OnInit{

  title1 = CarrucelEnum.title1; 
  title2 = CarrucelEnum.title2;
  subtitle1 = CarrucelEnum.subtitle1;
  subtitle2 = CarrucelEnum.subtitle2
  banner1 = CarrucelEnum.banner1;
  banner2 = CarrucelEnum.banner2;
  text1 = CarrucelEnum.text1;
  text2 = CarrucelEnum.text2;
  phoneNumber = CarrucelEnum.phoneNumber;

  constructor() {
    
  }

  ngOnInit(): void {
    
  }

  
  // Definición de un arreglo de diapositivas
  slides = [
    {
      title: this.title1,
      subtitle: this.subtitle1,
      description: this.text1,
      banner : this.banner1,
      image: '../../../assets/images/slider-3.jpg', // Ruta de la imagen de la diapositiva
      overlayDark: '6', // Valor para el atributo data-overlay-dark
      parallax: '1427.25', // Valor para el atributo data-swiper-parallax
      transitionDuration: '0', // Valor para el estilo transitionDuration
    },
    {
      title: this.title2,
      subtitle: this.subtitle2,
      description: this.text2,
      banner : this.banner2,
      image: '../../../assets/images/slider-1.jpg',
      overlayDark: '6',
      parallax: '1427.25',
      transitionDuration: '0',
    },
  ];

  // Definición de propiedades para el ancho de las diapositivas y la paginación
  slideWidth = 1903; // Ancho de las diapositivas en píxeles
  paginationWidth = 140; // Ancho de la paginación en píxeles





}
