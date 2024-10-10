import { Component, ViewChild, ElementRef, Renderer2, HostListener, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { TestimonialComponent } from './testimonial/testimonial.component';


@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [TestimonialComponent],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.css',
  encapsulation: ViewEncapsulation.None
})
export class TestimonialsComponent implements AfterViewInit {


  @ViewChild('carouselInner') carouselInner!: ElementRef;
  @ViewChild('carouselContainer') carouselContainer!: ElementRef;
  @ViewChild('carouselControl') carouselControl!: ElementRef;

  scrollPosition = 0;
  cardWidth = 0;
  carouselWidth = 0;
  visibleCards = 2.5; // Number of cards to display at once

  constructor(private renderer: Renderer2) {}

  ngAfterViewInit(): void {
    this.setupCarousel();

    // Add slide class if window width is below 768px
    if (window.matchMedia('(max-width: 768px)').matches) {
      this.visibleCards=1.3;
      this.renderer.addClass(this.carouselContainer.nativeElement, 'slide');
    }else if (window.matchMedia('(max-width: 992px)').matches){
      this.visibleCards=1.8;
      this.renderer.addClass(this.carouselControl.nativeElement, 'carouselbtn');
    }else{
      this.visibleCards=2.6;
      this.renderer.addClass(this.carouselControl.nativeElement, 'carouselbtn');
    }
  }

  setupCarousel() {
    this.carouselWidth = this.carouselInner.nativeElement.scrollWidth;
    const firstCard = this.carouselInner.nativeElement.querySelector('.carousel-item');
    this.cardWidth = firstCard.offsetWidth; // Get the width of a single card
  }

  scrollNext() {
    if (this.scrollPosition < this.carouselWidth - this.cardWidth * this.visibleCards) {
      this.scrollPosition += this.cardWidth;
      this.scrollCarousel();
    }
  }

  scrollPrev() {
    if (this.scrollPosition > 0) {
      this.scrollPosition -= this.cardWidth;
      this.scrollCarousel();
    }
  }

  scrollCarousel() {
    this.renderer.setStyle(
      this.carouselInner.nativeElement,
      'scroll-behavior',
      'smooth'
    );
    this.carouselInner.nativeElement.scrollLeft = this.scrollPosition;
  }

  // Listen to window resize event and reinitialize carousel on window size change
  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.setupCarousel();
    // Reapply the 'slide' class on small screen sizes
    if (window.matchMedia('(max-width: 768px)').matches) {
      this.renderer.addClass(this.carouselContainer.nativeElement, 'slide');
      this.renderer.removeClass(this.carouselControl.nativeElement, 'carouselbtn')
      this.visibleCards=1.3;

    } else if (window.matchMedia('(max-width: 992)').matches) {
      this.renderer.removeClass(this.carouselContainer.nativeElement, 'slide');
      this.renderer.addClass(this.carouselControl.nativeElement, 'carouselbtn')
      this.visibleCards=1.7;
    }else{
      // this.renderer.removeClass(this.carouselContainer.nativeElement, 'slide');
      this.renderer.addClass(this.carouselControl.nativeElement, 'carouselbtn')
      this.renderer.removeClass(this.carouselContainer.nativeElement, 'slide');
      this.visibleCards=2.5;
    }
  }
}
