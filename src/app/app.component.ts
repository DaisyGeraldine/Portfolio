import { AfterViewInit, Component, ElementRef, OnInit, OnDestroy } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ThemeService } from './services/theme.service';
import { Subscription } from 'rxjs/internal/Subscription';
import * as AOS from "aos";
// import BIRDS from 'vanta/dist/vanta.birds.min'

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
    if (typeof window !== 'undefined') {
      AOS.init();
    }

  }

  // ngAfterViewInit(): void {
  //   this.loadVanta(this.themeService.getCurrentValue());

  //   this.themeSub = this.themeService.isDarkMode$.subscribe(isDarkMode => {
  //     if (this.vantaEffect) {
  //       this.vantaEffect.setOptions({
  //         backgroundColor: isDarkMode ? 0x000000 : 0xffffff,
  //         color1: 0xff0000,
  //         color2: 0x00ff00
  //       });
  //     } else {
  //       this.loadVanta(isDarkMode);
  //     }
  //   });
  // }

  async ngAfterViewInit(): Promise<void> {
    await this.loadVanta(this.themeService.getCurrentValue());

    this.themeSub = this.themeService.isDarkMode$.subscribe(isDarkMode => {
      if (this.vantaEffect) {
        this.vantaEffect.setOptions({
          backgroundColor: isDarkMode ? 0x000000 : 0xffffff,
          color1: isDarkMode ? 0x533F7B : 0xff0000,
          color2: isDarkMode ? 0xbeaced : 0x00ff00
        });
      } else {
        this.loadVanta(isDarkMode);
      }
    });
  }

  // async loadVanta(isDarkMode: boolean) {
  //   if (typeof window !== 'undefined') {
  //     this.vantaEffect = BIRDS({
  //       el: this.elementRef.nativeElement.querySelector('#vanta-bg'),
  //       THREE: (window as any).THREE,
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

  async loadVanta(isDarkMode: boolean): Promise<void> {
    // Verifica si estamos en el navegador y carga Vanta dinámicamente
    if (typeof window !== 'undefined') {
      try {
        const BIRDS = (await import('vanta/dist/vanta.birds.min')).default;
        this.vantaEffect = BIRDS({
          el: this.elementRef.nativeElement.querySelector('#vanta-bg'),
          THREE: (window as any).THREE, // Asegúrate de que THREE.js está disponible globalmente
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
      } catch (error) {
        console.error('Error al cargar Vanta.js:', error);
      }
    }
  }

  ngOnDestroy(): void {
    if (this.vantaEffect) this.vantaEffect.destroy();
    if (this.themeSub) this.themeSub.unsubscribe();
  }
}
