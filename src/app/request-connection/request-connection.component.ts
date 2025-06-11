import { Component, inject, signal, WritableSignal } from '@angular/core';
import { ConnectorService } from '../service/connector/connector.service';
import { UtilityService } from '../service/utility/utility.service';

@Component({
  selector: 'app-request-connection',
  imports: [],
  templateUrl: './request-connection.component.html',
  styleUrl: './request-connection.component.css'
})
export class RequestConnectionComponent {
  connectorService = inject(ConnectorService);
  utilityService = inject(UtilityService);
  offerStatus: WritableSignal<string> = signal('no offer created yet');

  onCreateOffer(): void {
    this.connectorService.createOffer().then(value => {
      console.log(value);
      this.offerStatus.set('offer copied to clipboard');
      this.utilityService.copyText(value);
    });
  }

  onAcceptAnswer(answer: string): void {
    this.connectorService.acceptAnswer(answer).then(() => console.log('----'));
  }

  

  
}
