import {Directive, HostBinding, HostListener} from "@angular/core";

@Directive({selector: 'button[ifNetwork]'})
export class NkIfNetworkDirective {
  private _offline: boolean = false;

  @HostBinding('disabled')
  get isDisable(){
    return this._offline;
  }

  @HostListener('window:offline')
  disableButton() {
    this._offline = true;
  }

  @HostListener('window:online')
  enableButton(){
    this._offline = false;
  }
}
