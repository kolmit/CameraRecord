import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WebSocketService {
  private socket!: WebSocket;

  constructor() {}

  public connect(url: string): Observable<string> {
    this.socket = new WebSocket(url);

    return new Observable<string>((observer) => {
      this.socket.onmessage = (event) => {
        observer.next(event.data);
      };

      this.socket.onerror = (event) => {
        observer.error(event);
      };

      this.socket.onclose = (event) => {
        observer.complete();
      };

      /* return {
        unsubscribe() {
          this.socket.close();
        },
      };*/
    });
  }
}
