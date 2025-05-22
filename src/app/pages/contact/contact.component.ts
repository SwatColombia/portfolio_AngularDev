import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import gsap from 'gsap';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent implements AfterViewInit {
  @ViewChild('zoomContainer', { static: true }) containerRef!: ElementRef;
  @ViewChild('zoomImage', { static: true }) imageRef!: ElementRef;

  ngAfterViewInit(): void {
    const container = this.containerRef.nativeElement;
    const image = this.imageRef.nativeElement;

    container.addEventListener('mousemove', (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;

      gsap.to(image, {
        scale: 2,
        transformOrigin: `${x}% ${y}%`,
        duration: 0.3,
        ease: 'power2.out',
      });
    });

    container.addEventListener('mouseleave', () => {
      gsap.to(image, {
        scale: 1,
        transformOrigin: 'center center',
        duration: 0.3,
      });
    });
  }
}
