import {Directive, Host, HostBinding, HostListener, Optional, SkipSelf} from '@angular/core';
import {ToggleContentDirective} from "./toggle-content.directive";
import {ToggleDirective} from "./toggle.directive";

@Directive({
  selector: '[appToggleTrigger]'
})
export class ToggleTriggerDirective {
  _target: ToggleContentDirective;

  constructor(
      @Optional() @SkipSelf() private toggleControl: ToggleDirective
  ) {}

  add(toggleContent: ToggleContentDirective){
    this._target = toggleContent;
    this.toggleControl && this.toggleControl.addTrigger(this);
  }

  @HostListener('click')
  toggleContent() {
    if(!this._target) {
      console.warn('Trigger must wrap a toggle content directive')
    }

    if(this.toggleControl) {
      this.toggleControl.toggleAll(this);
    } else {
      this._target.isVisible ? this._target.hide() : this._target.show();
    }

  }

  @HostBinding('style.cursor')
  cursor = 'pointer';
}
