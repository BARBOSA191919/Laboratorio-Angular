import { Component } from '@angular/core';

@Component({
  selector: 'app-saludo',
  imports: [],
  templateUrl: './saludo.component.html',
  styleUrl: './saludo.component.css'
})
export class SaludoComponent {
nombre: string = 'Santiago Barbosa';
mensaje: string = 'Hola, bienvenidos al laboratorio de angular IberoSoftware!';

saludar(): void{
  alert(this.mensaje + 'Soy estudiante,' + this.nombre);
}
}
