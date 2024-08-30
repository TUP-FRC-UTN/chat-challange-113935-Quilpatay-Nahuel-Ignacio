import { Component, Input } from '@angular/core';
import { MensajeUsuarioComponent } from '../mensaje-usuario/mensaje-usuario.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sala',
  standalone: true,
  imports: [MensajeUsuarioComponent, CommonModule],
  templateUrl: './sala.component.html',
  styleUrl: './sala.component.css'
})
export class SalaComponent {
  @Input() user1: string = "";
  @Input() user2: string = "";
  @Input() user1Messages: string[] = [];
  @Input() user2Messages: string[] = [];
}
