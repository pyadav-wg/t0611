import { Component, inject } from '@angular/core';
import { ManualConnectionComponent } from './manual-connection/manual-connection.component';
import { ChatBoxComponent } from './chat-box/chat-box.component';

@Component({
  selector: 'app-root',
  imports: [ManualConnectionComponent, ChatBoxComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
}
