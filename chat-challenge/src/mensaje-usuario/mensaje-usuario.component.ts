import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-mensaje-usuario',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './mensaje-usuario.component.html',
})
export class MensajeUsuarioComponent {
  @Input() userName: string = "";
  @Output() newSentMessage = new EventEmitter<string>();
  @Output() userEmitter = new EventEmitter<string>();

  sentMessage: string = "";

  sendMessage(userName: string) {
    this.newSentMessage.emit(this.sentMessage);
    this.userEmitter.emit(this.userName);
    console.log(this.sentMessage, this.userName)
    this.sentMessage = "";
  }
}
