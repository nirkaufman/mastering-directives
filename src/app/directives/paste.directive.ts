import {Directive, EventEmitter, HostListener, Output} from '@angular/core';

@Directive({
  selector: '[keydown.paste]'
})
export class PasteDirective {

  @Output('keydown.paste')
  pasteEvent = new EventEmitter<string>();

  @HostListener('keydown', ['$event'])
  async detectPaste(event) {
    if(event.ctrlKey && event.code === 'KeyV') {
      const content = await navigator.clipboard.readText();
      this.pasteEvent.emit(content);
    }
  }

}
