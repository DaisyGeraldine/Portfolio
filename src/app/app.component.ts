// import { min } from './../../node_modules/@types/three/src/Three.TSL.d';
import { AfterViewInit, Component, ElementRef, OnInit, OnDestroy } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ThemeService } from './services/theme.service';
import { Subscription } from 'rxjs/internal/Subscription';
import * as AOS from "aos";
import BIRDS from 'vanta/dist/vanta.birds.min'
// import * as THREE from 'three';
// import BIRDS from 'vanta/dist/vanta.birds.min.js';
// import VANTA from 'vanta/dist/vanta.birds.min';

// import BIRDS from 'vanta/dist/vanta.birds.min';
// import VANTA from 'assets/vanta/vanta.birds.min.js';
// import VANTA from 'vanta/vanta.birds.min';
// import * as VANTA from 'vanta/dist/vanta.birds.min';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit, AfterViewInit, OnDestroy {
  title = 'portfolio';
  private vantaEffect: any;
  private themeSub!: Subscription;

  constructor(private elementRef: ElementRef, private themeService: ThemeService) { }

  ngOnInit(): void {
    // AOS.init();
    if (typeof window !== 'undefined') {
      AOS.init();
      // import('aos/dist/aos.js').then(AOS => {
      //   AOS.init({
      //     duration: 1200,
      //     once: true // whether animation should happen only once - while scrolling down
      //   });
      // });
    }

  }

  ngAfterViewInit(): void {
    this.loadVanta(this.themeService.getCurrentValue());

    this.themeSub = this.themeService.isDarkMode$.subscribe(isDarkMode => {
      if (this.vantaEffect) {
        this.vantaEffect.setOptions({
          backgroundColor: isDarkMode ? 0x000000 : 0xffffff,
          color1: 0xff0000,
          color2: 0x00ff00
        });
      } else {
        this.loadVanta(isDarkMode);
      }
    });
  }

  // loadVanta(isDarkMode: boolean) {
  //   if (typeof window !== 'undefined') {
  //     import('assets/vanta/vanta.birds.min.js').then(VANTA => {
  //       this.vantaEffect = VANTA.default({
  //         el: this.elementRef.nativeElement.querySelector('#vanta-bg'),
  //         backgroundColor: isDarkMode ? 0x000000 : 0xffffff,
  //         color1: 0x533F7B,
  //         color2: 0xbeaced,
  //         birdSize: 0.5,
  //         wingSpan: 10,
  //         speedLimit: 3.0,
  //         separation: 50.0,
  //         alignment: 20.0,
  //         cohesion: 20.0
  //       });
  //     });
  //   }
  // }

  async loadVanta(isDarkMode: boolean) {
    if (typeof window !== 'undefined') {
      this.vantaEffect = BIRDS({
        el: this.elementRef.nativeElement.querySelector('#vanta-bg'),
        THREE: (window as any).THREE,
        backgroundColor: isDarkMode ? 0x000000 : 0xffffff,
        color1: 0x533F7B,
        color2: 0xbeaced,
        birdSize: 0.5,
        wingSpan: 10,
        speedLimit: 3.0,
        separation: 50.0,
        alignment: 20.0,
        cohesion: 20.0
      });

      // const BIRDS = await import('vanta/dist/vanta.birds.min');
      // this.vantaEffect = BIRDS.default({
      //   el: this.elementRef.nativeElement.querySelector('#vanta-bg'),
      //   // THREE: THREE,
      //   backgroundColor: isDarkMode ? 0x000000 : 0xffffff,
      //   color1: 0x533F7B,
      //   color2: 0xbeaced,
      //   birdSize: 0.5,
      //   wingSpan: 10,
      //   speedLimit: 3.0,
      //   separation: 50.0,
      //   alignment: 20.0,
      //   cohesion: 20.0
      // });
    }
  }

  // loadVanta(isDarkMode: boolean) {
  //   if (typeof window !== 'undefined') {
  //     this.vantaEffect = VANTA({
  //       el: this.elementRef.nativeElement.querySelector('#vanta-bg'),
  //       backgroundColor: isDarkMode ? 0x000000 : 0xffffff,
  //       color1: 0x533F7B,
  //       color2: 0xbeaced,
  //       birdSize: 0.5,
  //       wingSpan: 10,
  //       speedLimit: 3.0,
  //       separation: 50.0,
  //       alignment: 20.0,
  //       cohesion: 20.0
  //     });
  //   }
  // }

  // loadVanta(isDarkMode: boolean) {
  //   if (typeof window !== 'undefined' && window['VANTA']) {
  //     if (window['VANTA'].NET) { // Probar otro efecto, como "NET"
  //       this.vantaEffect = window['VANTA'].NET({
  //         el: this.elementRef.nativeElement.querySelector('#vanta-bg'),
  //         backgroundColor: isDarkMode ? 0x000000 : 0xffffff,
  //         color1: 0x533F7B,
  //         color2: 0xbeaced
  //       });
  //     } else {
  //       console.error('El efecto NET no está disponible');
  //     }
  //   }
  // }


  // ngAfterViewInit(): void {
  //   if (typeof window !== 'undefined') {
  //     import('vanta/dist/vanta.birds.min').then(VANTA => {
  //       this.vantaEffect = VANTA.default({
  //         el: this.elementRef.nativeElement.querySelector('#vanta-bg'),
  //         backgroundColor: 0x0, // Ajusta el color de fondo aquí
  //         color1: 0xff0000, // Ajusta el primer color
  //         color2: 0x00ff00, // Ajusta el segundo color
  //         birdSize: 0.5, // Ajusta el tamaño de los pájaros
  //         wingSpan: 10, // Ajusta la envergadura de las alas
  //         speedLimit: 3.00, // Ajusta la velocidad
  //         separation: 50.00, // Ajusta la separación
  //         alignment: 20.00, // Ajusta la alineación
  //         cohesion: 20.00 // Ajusta la cohesión
  //       });
  //     });
  //   }
  // }

  ngOnDestroy(): void {
    if (this.vantaEffect) this.vantaEffect.destroy();
    if (this.themeSub) this.themeSub.unsubscribe();
  }
}
