import { Component } from '@angular/core';
import { MessageService} from '../services/message.service';

@Component({
  selector: 'message-action',
  templateUrl: './MessageActionComponent.html',
  styleUrls: ['./app.component.css']
})
export class MessageActionComponent {
  textInput: any;
  constructor(private messageService:MessageService) {}
  updateText(e) : void {
      this.textInput = e.target.value;
  }
  sendMessage() : void {
    this.messageService.sendMessage(this.textInput);
  }
  clearMessage() : void {
      this.textInput = "";
      this.messageService.clearMessage();
  }
}
