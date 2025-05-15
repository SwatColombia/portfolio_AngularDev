import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule, CommonModule], // Asegúrate de incluir RouterModule aquí
  templateUrl: './navbar.component.html',
  styles: ``,
})
export class NavbarComponent {

  constructor () { }
}
