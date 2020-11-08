import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
      <h1>Directives!</h1>

      <ng-container appToggle>
          <div appToggleTrigger>
              <h2>Show me or hide me</h2>
              <p *appToggleContent>content to hide or show</p>
          </div>

          <div appToggleTrigger>
              <h2>Show me or hide me 2</h2>
              <p *appToggleContent>content number 2 to hide or show</p>
          </div>

          <div appToggleTrigger>
              <h2>Show me or hide me 3</h2>
              <p *appToggleContent>content number 3 to hide or show</p>
          </div>
      </ng-container>
      

  `,
})
export class AppComponent {

}
