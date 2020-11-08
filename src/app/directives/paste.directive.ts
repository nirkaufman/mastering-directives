import {Directive, EventEmitter, HostBinding, HostListener, Input, Output} from '@angular/core';

@Directive({
  selector: '[keydown.paste]'
})
export class PasteDirective {

  @Output('keydown.paste')
  pasteEvent = new EventEmitter<string>();

  @HostListener('keydown', ['$event'])
  async detectPaste(event) {
    if(event.code === 'KeyP' && event.code === 'Meta') {
      const content = await navigator.clipboard.readText();
      this.pasteEvent.emit(content);
    }
  }

}
