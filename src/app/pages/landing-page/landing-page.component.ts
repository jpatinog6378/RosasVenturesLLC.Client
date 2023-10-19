import { Component, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {


  constructor(
    private renderer: Renderer2, private el: ElementRef
  ) {
    
  }

  ngOnInit(): void {
    
  };

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: Event) {
    debugger
    const element = this.el.nativeElement.querySelector('.navbar') as HTMLElement;
    if (window.scrollY > element.clientHeight) {
      this.renderer.addClass(element, 'navbar-scrolled');
    } else {
      this.renderer.removeClass(element, 'navbar-scrolled');
    }
  }
}
