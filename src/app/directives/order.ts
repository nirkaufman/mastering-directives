import {Directive, OnInit, Optional} from "@angular/core";

@Directive({ selector: '[first]' })
export class FirstDirective implements OnInit{
  ngOnInit(): void {
    console.log("FirstDirective instance");
  }

  print() {
    console.log("FirstDirective print");
  }
}

@Directive({ selector: '[second]' })
export class SecondDirective implements OnInit{
  constructor(@Optional() private firstDirective: FirstDirective) {}

  ngOnInit(): void {
    console.log("SecondDirective instance");

    if(this.firstDirective) {
      this.firstDirective.print()
    }
  }
}

@Directive({ selector: '[third]' })
export class ThirdDirective implements OnInit{
  ngOnInit(): void {
    console.log("ThirdDirective instance");
  }
}
