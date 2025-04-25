import { Component } from '@angular/core';
import { IconComponent } from '../../components/icon/icon.component';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../../services/theme.service';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [IconComponent, CommonModule, NavbarComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
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
