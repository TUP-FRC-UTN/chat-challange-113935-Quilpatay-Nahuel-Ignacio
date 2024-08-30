import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SalaComponent } from '../sala/sala.component';
import { MensajeUsuarioComponent } from '../mensaje-usuario/mensaje-usuario.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MensajeUsuarioComponent, SalaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  user1: string = "Pepe";
  user2: string = "María";

  message: string = "";
  user: string = "";
  user1Messages: string[] = [];
  user2Messages: string[] = [];

  onSentMessage(message: string, user: string) {
    console.log('entrando en onSentMessage ' + message + ' - ' + user)
    if (user == "Pepe") {
      this.user1Messages.push(message);
      console.log(this.user1Messages)
    } else if (user == "María") {
      this.user2Messages.push(message);
      console.log(this.user2Messages)
    }
  }
}
