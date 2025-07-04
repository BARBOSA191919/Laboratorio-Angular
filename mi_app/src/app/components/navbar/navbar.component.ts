import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: false,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})

export class NavbarComponent {
  isScrolled = false;
  isNavbarCollapsed = true; // <-- Agregado

  toggleNavbar() {           // <-- Agregado
    this.isNavbarCollapsed = !this.isNavbarCollapsed;
  }
  
  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 50;
  }
}
