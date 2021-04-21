import { pipe } from 'rxjs';
import { map, filter } from 'rxjs/operators';
import {
  RouterNavigatedAction,
  SerializedRouterStateSnapshot,
} from '@ngrx/router-store';

export const routeIncludesPath = (url: string) =>
  pipe(
    map((r: RouterNavigatedAction) => r.payload.routerState),
    filter((routerState: SerializedRouterStateSnapshot) =>
      routerState.url.includes(url)
    )
  );

export const routeEqualsPath = (url: string) =>
  pipe(
    map((r: RouterNavigatedAction) => r.payload.routerState),
    filter(
      (routerState: SerializedRouterStateSnapshot) => routerState.url === url
    )
  );

export const extractVerifiedParameter = (param: string) =>
  pipe(
    map(
      ({
        root: {
          firstChild: {
            firstChild: { params },
          },
        },
      }) => params[param]
    ),
    filter((p) => !!p)
  );
