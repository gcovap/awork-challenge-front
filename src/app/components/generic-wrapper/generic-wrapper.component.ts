import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-generic-wrapper',
  imports: [RouterOutlet, NgClass],
  standalone: true,
  templateUrl: './generic-wrapper.component.html',
  styleUrl: './generic-wrapper.component.scss'
})
export class GenericWrapperComponent {
  isDarkMode = false;

  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
    document.body.classList.toggle('dark-theme');
  }
}
