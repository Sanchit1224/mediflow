import { env } from '@/lib/env';

export class MediFlowWebSocket {
  private socket?: WebSocket;

  connect(onMessage: (event: MessageEvent<string>) => void) {
    if (this.socket?.readyState === WebSocket.OPEN) return;
    this.socket = new WebSocket(env.webSocketUrl);
    this.socket.addEventListener('message', onMessage);
  }

  disconnect() {
    this.socket?.close();
    this.socket = undefined;
  }
}
