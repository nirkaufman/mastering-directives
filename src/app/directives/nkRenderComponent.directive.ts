import {ComponentFactoryResolver, Directive, Input, Type, ViewContainerRef} from "@angular/core";

@Directive({ selector: '[nkComponent]'})
export class NkRenderComponentDirective {

  @Input('nkComponent')
  set componentToRender(component: Type<any>) {
    this.viewContainer.clear();

    const resolver = this.viewContainer.injector.get(ComponentFactoryResolver);
    this.viewContainer.createComponent(resolver.resolveComponentFactory(component));
  }

  constructor(private viewContainer: ViewContainerRef) {}
}
