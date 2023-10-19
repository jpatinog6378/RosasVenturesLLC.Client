// header.component.ts
import { Component, OnInit, Renderer2, ElementRef, AfterViewInit } from '@angular/core';
import { MenuItem } from 'src/app/models/header.models';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, AfterViewInit {

  menuItems: MenuItem[] = [
    { label: 'Home', target: 'slider-home', active: true },
    { label: 'Services', target: 'services', active: false },
    { label: 'Products', target: 'products', active: false },
    { label: 'Packages', target: 'packages', active: false },
    { label: 'Review', target: 'review', active: false },
    // { label: 'Book Appointment', target: 'reservation', active: false },
    { label: 'Contact', target: 'contact', active: false }
  ];

  constructor(private renderer: Renderer2, private el: ElementRef) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
  }



}


