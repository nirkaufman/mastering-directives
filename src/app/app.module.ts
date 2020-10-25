import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {NkClassDirective} from "./directives/nkClass.directive";
import {NkStyleDirective} from "./directives/nkStyle.directive";
import {NkLongClickDirective} from "./directives/nkLongClick.directive";
import {NkModelDirective} from "./directives/nkModel.directive";
import {NkIfNetworkDirective} from "./directives/nkIfNetwork.directive";
import {NkAutoResizeDirective} from "./directives/nkAutoResize.directive";
import {NkIfDirective} from "./directives/NkIf.directive";
import {NkRenderComponentDirective} from "./directives/nkRenderComponent.directive";
import {NkForMapDirective} from "./directives/nkForMap.directive";
import {NkWindowDirective} from "./directives/nkWindow.directive";


@NgModule({
  declarations: [
    AppComponent,
    NkClassDirective,
    NkStyleDirective,
    NkLongClickDirective,
    NkModelDirective,
    NkIfNetworkDirective,
    NkAutoResizeDirective,
      NkIfDirective,
      NkRenderComponentDirective,
      NkForMapDirective,
      NkWindowDirective
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
