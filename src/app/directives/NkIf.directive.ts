import {Directive, Input, Optional, TemplateRef, ViewContainerRef} from "@angular/core";

@Directive({selector: '[nkIf]'})
export class NkIfDirective {

  @Input('nkIf')
  set IsHidden(shouldHide: boolean) {
     if(shouldHide) {
        this.viewContainer.clear();
     }  else {
       this.viewContainer.createEmbeddedView(this.template);
     }
  }

  constructor(private template: TemplateRef<any>,
              private viewContainer: ViewContainerRef) {
  }
}
