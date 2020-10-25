import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
      <h1>Directives!</h1>

      <video #video
             #nkWindow=portal
             nkWindow
             width="400"
             src="http://media.w3.org/2010/05/sintel/trailer.mp4">
      </video>

      <div>
          <button (click)="video.play()">Play</button>
          <button (click)="video.pause()">Pause</button>
          <button (click)="nkWindow.open()">Lunch!</button>
          <button (click)="nkWindow.close()">Stop</button>
      </div>
  `,
})
export class AppComponent {
}
