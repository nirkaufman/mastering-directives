import {Directive, ElementRef, HostBinding, HostListener, Inject} from "@angular/core";
import {WINDOW} from "../windowRef.token";

@Directive({selector: 'textarea'})
export class NkAutoResizeDirective {
  private readonly _textArea: HTMLTextAreaElement;

  @HostBinding('style')
  defaultStyle = {overflow: 'hidden', height: 'auto', resize: 'none'};

  @HostListener('input')
  autoExpand() {
    this._textArea.style.height = 'inherit';  // Reset textArea height
    const computed = this.window.getComputedStyle(this._textArea); // Get the computed styles

    // Calculate the height
    const height = parseInt(computed.getPropertyValue('border-top-width'), 10)
        + parseInt(computed.getPropertyValue('padding-top'), 10)
        + this._textArea.scrollHeight
        + parseInt(computed.getPropertyValue('padding-bottom'), 10)
        + parseInt(computed.getPropertyValue('border-bottom-width'), 10);

    this._textArea.style.height = height + 'px';
  }

  constructor(@Inject(WINDOW) private window, private hostElement: ElementRef) {
    this._textArea = hostElement.nativeElement;
  }

}
