import { Component, inject, signal, WritableSignal } from '@angular/core';
import { ConnectorService } from '../service/connector/connector.service';
import { UtilityService } from '../service/utility/utility.service';

@Component({
  selector: 'app-answer-connection',
  imports: [],
  templateUrl: './answer-connection.component.html',
  styleUrl: './answer-connection.component.css'
})
export class AnswerConnectionComponent {
  connectorService = inject(ConnectorService);
  utilityService = inject(UtilityService);
  answerStatus: WritableSignal<string> = signal('answer not created yet');

  onCreateAnswer(offer: string): void {
    this.connectorService.createAnswer(offer).then(value => {
      console.log(value);
      this.answerStatus.set('answer copied to clipboard');
      this.utilityService.copyText(value);
    });
  }
}
