import {Directive, ElementRef, Input, Renderer2} from "@angular/core";


@Directive({selector: '[nkStyle]'})
export class NkStyleDirective {
  @Input('nkStyle') styleMap:Record<string, string>;

  constructor(private renderer: Renderer2,
              private hostElement: ElementRef) {}

  ngDoCheck(): void {
    for(let [key, value] of Object.entries(this.styleMap)) {
        this.renderer.setStyle(this.hostElement.nativeElement, key, value);
    }
  }
}
