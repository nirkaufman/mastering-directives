import {Directive, EventEmitter, HostListener, Output} from "@angular/core";

@Directive({selector: '[click.long]'})
export class NkLongClickDirective {
  private _clickTimer: number;

  @Output('click.long')
  longClickEvent = new EventEmitter();

  @HostListener('mousedown')
  onMouseDown() {
    this._clickTimer = window.setTimeout(
        () => this.longClickEvent.emit(),
        2000
    )
  }

  @HostListener('mouseup')
  cancelTimer() {
    clearTimeout(this._clickTimer)
  }
}
