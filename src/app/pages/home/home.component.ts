import { AfterViewInit, Component } from '@angular/core';
import { gsap } from 'gsap';
//import { ScrollTrigger } from 'gsap/ScrollTrigger';
//gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements AfterViewInit{

  ngAfterViewInit(): void {
    
    
      gsap.from("#title_home", {
        duration: 3, opacity: 0
        , y: -80
      });
      gsap.from("#subtitle_one", {
      scrollTrigger: {
      trigger: "#subtitle_one", // el elemento que activa la animación
      start: "top 50%",         // inicia cuando el top del elemento llega al 80% de la pantalla
      toggleActions: "play none none none", // solo se ejecuta una vez
          },
        duration: 4,
        opacity: 0,
        y: 240
      });
      gsap.from("#subtitle_two", {
      scrollTrigger: {
      trigger: "#subtitle_two", // el elemento que activa la animación
      start: "top 50%",         // inicia cuando el top del elemento llega al 80% de la pantalla
      toggleActions: "play none none none", // solo se ejecuta una vez
          },
        duration: 8,
        opacity: 0,
        y: 260
      });
      gsap.from("#subtitle_three", {
      scrollTrigger: {
      trigger: "#subtitle_three", // el elemento que activa la animación
      start: "top 60%",         // inicia cuando el top del elemento llega al 80% de la pantalla
      toggleActions: "play none none none", // solo se ejecuta una vez
          },
        duration: 12,
        opacity: 0,
        y: 280
      });
      gsap.from("#subtitle_four", {
      scrollTrigger: {
      trigger: "#subtitle_four", // el elemento que activa la animación
      start: "top 70%",         // inicia cuando el top del elemento llega al 80% de la pantalla
      toggleActions: "play none none none", // solo se ejecuta una vez
          },
        duration: 16,
        opacity: 0,
        y: 300
      });
    }
  }


