import { Component, OnInit } from '@angular/core';
import { WebSocketService } from '../web-socket.service';

@Component({
  selector: 'app-video-stream',
  template: `<img [src]="imageSrc" *ngIf="imageSrc" />`,
})
export class VideoStreamComponent implements OnInit {
  imageSrc: string | ArrayBuffer = '';

  constructor(private webSocketService: WebSocketService) {}

  ngOnInit() {
    this.webSocketService.connect('ws://your-websocket-url').subscribe(
      (data) => {
        this.imageSrc = 'data:image/jpeg;base64,' + data;
      },
      (err) => console.error(err),
      () => console.log('WebSocket connection completed')
    );
  }
}
