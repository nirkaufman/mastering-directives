import { Directive } from '@angular/core';
import {ToggleTriggerDirective} from "./toggle-trigger.directive";

@Directive({
  selector: '[appToggle]'
})
export class ToggleDirective {
  private _triggers: ToggleTriggerDirective[] = [];

  addTrigger(trigger: ToggleTriggerDirective) {
    this._triggers.push(trigger);
  }

  toggleAll(trigger: ToggleTriggerDirective) {
    this._triggers.forEach( triggerDirective => triggerDirective._target.hide());
    trigger._target.show();
  }

}
