import { Component, signal, WritableSignal } from '@angular/core';
import { RequestConnectionComponent } from '../request-connection/request-connection.component';
import { AnswerConnectionComponent } from '../answer-connection/answer-connection.component';

@Component({
  selector: 'app-manual-connection',
  imports: [RequestConnectionComponent, AnswerConnectionComponent],
  templateUrl: './manual-connection.component.html',
  styleUrl: './manual-connection.component.css'
})
export class ManualConnectionComponent {
  activePanel: WritableSignal<string> = signal('request');

  onRequestPanel(): void {
    this.activePanel.set('request');
  }

  onAnswerPanel(): void {
    this.activePanel.set('answer')
  }
}
