import {Directive, EventEmitter, HostBinding, HostListener, Input, Output} from "@angular/core";

@Directive({ selector: '[nkModel]' })
export class NkModelDirective {

  @Input('nkModel')
  dynamicValue: string;

  @Output('nkModelChange')
  emitUpdates = new EventEmitter();

  @HostBinding('value')
  get value(){
    return this.dynamicValue
  }

  @HostListener('change', ['$event'])
  updateValue(event) {
    this.dynamicValue = event.target.value;
    this.emitUpdates.emit(this.dynamicValue);
  }
}
