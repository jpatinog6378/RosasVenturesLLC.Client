import { AfterViewInit, Component, HostListener } from '@angular/core';
import Swiper from 'swiper';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit{

  swiper!: Swiper;

  constructor() {
    
  }

  ngAfterViewInit(): void {
    this.initSwiper();
  }

  initSwiper() {
    this.swiper = new Swiper('.swiper-container', {
      loop: true, // Permite que el carrusel sea cíclico
      autoplay: {
        delay: 5000, // Establece el tiempo de espera entre diapositivas (en milisegundos)
      },
      // Otras opciones de configuración según tus necesidades
    });
  }

  



}
