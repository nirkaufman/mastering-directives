import {Directive, DoCheck, Input, TemplateRef, ViewContainerRef} from "@angular/core";

@Directive({selector: '[nkForMap]'})
export class NkForMapDirective implements DoCheck{

  @Input('nkForMapIn') map;

  constructor(private viewContainer: ViewContainerRef,
              private template: TemplateRef<any>) {}

  ngDoCheck(): void {
    Object.keys(this.map).forEach( key => {
     this.viewContainer.createEmbeddedView(
         this.template,
         { $implicit: {key: key, value: this.map[key]} }
     )
    })
  }
}
