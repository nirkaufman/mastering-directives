import {Inject, InjectionToken, NgModule} from "@angular/core";

// define it
export const WINDOW = new InjectionToken<Window>(
    'Return reference to window',
    { providedIn: 'platform', factory: () => window }
);

// use it
class ComponentOrService {
  constructor(@Inject(WINDOW) windowRef: Window) {}
}

// override it
@NgModule({
  providers: [{
    provide: WINDOW,
    useValue: {/* mock implementation for other platforms */}
  }]
})
class AppModule {}




