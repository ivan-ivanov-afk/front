import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Message } from '../models/message.model';

@Injectable({ providedIn: 'root' })
export class MessageService {
  private apiUrl = 'http://localhost:8118/api/messages';

  constructor(private http: HttpClient) {}

  sendMessage(message: Message): Observable<void> {
    return this.http.post<void>(this.apiUrl, message);
  }
}