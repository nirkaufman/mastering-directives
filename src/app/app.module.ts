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
import { PasteDirective } from './directives/paste.directive';
import { ButtonElementDirective } from './directives/button-element.directive';
import {FirstDirective, SecondDirective, ThirdDirective} from "./directives/order";
import { ToggleContentDirective } from './toggle/toggle-content.directive';
import { ToggleTriggerDirective } from './toggle/toggle-trigger.directive';
import { ToggleDirective } from './toggle/toggle.directive';


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
      NkWindowDirective,
      PasteDirective,
      ButtonElementDirective,
      FirstDirective, SecondDirective, ThirdDirective, ToggleContentDirective, ToggleTriggerDirective, ToggleDirective

  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
