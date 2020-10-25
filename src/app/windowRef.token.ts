import {InjectionToken} from "@angular/core";

export const WINDOW = new InjectionToken<Window>(
    'Return reference to window',
    {providedIn: 'platform', factory: () => window}
)
