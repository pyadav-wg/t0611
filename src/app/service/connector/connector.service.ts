import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ConnectorService {
  private peerConnection: RTCPeerConnection = new RTCPeerConnection({
    iceServers: [{ urls: 'stun:stun.l.google.com:19302' }],
  });
  private dataChannel: RTCDataChannel =
    this.peerConnection.createDataChannel('chat');

  constructor() {
    this.dataChannel.onopen = e => console.log("open!!!!");
  }

  async createOffer(): Promise<string> {
    const offer = await this.peerConnection.createOffer();
    await this.peerConnection.setLocalDescription(offer);

    await new Promise((resolve) => {
      this.peerConnection.onicecandidate = (event) => {
        if (!event.candidate) {
          resolve(null);
        }
      };
    });
    console.log('offer created');
    return this.peerConnection.localDescription!.sdp;
  }

  async createAnswer(receivedOffer: string): Promise<string> {
    await this.peerConnection.setRemoteDescription({
      type: 'offer',
      sdp: receivedOffer,
    });

    const answer = await this.peerConnection.createAnswer();
    await this.peerConnection.setLocalDescription(answer);

    await new Promise((resolve) => {
      this.peerConnection.onicecandidate = (event) => {
        if (!event.candidate) {
          resolve(null);
        }
      };
    });
    console.log('answer created');
    return this.peerConnection.localDescription!.sdp;
  }

  async acceptAnswer(receivedAnswer: string): Promise<void> {
    await this.peerConnection.setRemoteDescription({
      type: 'answer',
      sdp: receivedAnswer
    });
    console.log('answer accepted');
  }

  closeConnection(): void {
    this.dataChannel.close();
    this.peerConnection.close();
  }
}
