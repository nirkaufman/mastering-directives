import {Directive, Host, OnInit, Optional, SkipSelf, TemplateRef, ViewContainerRef} from '@angular/core';
import {ToggleTriggerDirective} from "./toggle-trigger.directive";

@Directive({
  selector: '[appToggleContent]'
})
export class ToggleContentDirective implements OnInit{
  isVisible: boolean;

  constructor(
      private template: TemplateRef<any>,
      private viewContainer: ViewContainerRef,
      @Optional() @SkipSelf() private trigger: ToggleTriggerDirective
  ) {}

  ngOnInit(): void {
    this.trigger ? this.trigger.add(this) :
        console.warn("The toggle content directive needs to be wrapped with a trigger directive")
  }

  show() {
    this.viewContainer.createEmbeddedView(this.template);
    this.isVisible = true;
  }

  hide() {
    this.viewContainer.clear();
    this.isVisible = false;
  }
}
