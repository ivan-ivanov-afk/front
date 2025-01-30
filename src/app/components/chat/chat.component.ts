import { Component, OnInit } from '@angular/core';
import { MessageService } from '../../services/message.service';
import { Message } from '../../models/message.model';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  messages: Message[] = [];
  newMessage: string = '';

  constructor(private messageService: MessageService) {}

  ngOnInit() {
    // Fetch messages
  }

  sendMessage() {
    const message: Message = {
      id: 0,
      senderUsername: 'testUser',
      receiverChannelId: 1,
      content: this.newMessage,
      timestamp: new Date()
    };
    this.messageService.sendMessage(message).subscribe(() => this.newMessage = '');
  }
}