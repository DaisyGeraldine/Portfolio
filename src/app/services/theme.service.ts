import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private darkModeSubject = new BehaviorSubject<boolean>(false);
  isDarkMode$ = this.darkModeSubject.asObservable();

  constructor() { }

  toggleDarkMode() {
    this.darkModeSubject.next(!this.darkModeSubject.value);
  }

  setDarkMode(value: boolean) {
    this.darkModeSubject.next(value);
  }

  getCurrentValue(): boolean {
    return this.darkModeSubject.value;
  }
}
