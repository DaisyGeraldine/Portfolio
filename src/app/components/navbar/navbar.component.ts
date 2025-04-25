import { Component } from '@angular/core';
import { ThemeService } from '../../services/theme.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [ CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  isDarkMode = false;
  
    // toggleDarkMode() {
    //   this.isDarkMode = !this.isDarkMode;
    // }
  
    constructor(private themeService: ThemeService) {
      this.themeService.isDarkMode$.subscribe(value => {
        this.isDarkMode = value;
      });
    }
  
    toggleDarkMode() {
      this.themeService.toggleDarkMode();
    }

}
