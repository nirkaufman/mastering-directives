import {Directive, DoCheck, ElementRef, Input, Renderer2} from "@angular/core";


@Directive({ selector: '[nkClass]' })
export class NkClassDirective implements DoCheck {

  @Input('nkClass') cssMap:Record<string, boolean>;

  constructor(private renderer: Renderer2,
              private hostElement: ElementRef) {}

  ngDoCheck(): void {
    for(let [key, value] of Object.entries(this.cssMap)) {
      if(value === true) {
        this.renderer.addClass(this.hostElement.nativeElement, key);
      } else {
        this.renderer.removeClass(this.hostElement.nativeElement, key);
      }
    }
  }
}
