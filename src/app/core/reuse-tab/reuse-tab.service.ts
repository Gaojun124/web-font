import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, DetachedRouteHandle, ActivatedRoute } from '@angular/router';


@Injectable()
export class ReuseTabService {

  constructor() {
  }

  shouldDetach(route: ActivatedRouteSnapshot): boolean {
    return true;
  }

  store(route: ActivatedRouteSnapshot, handle: DetachedRouteHandle | null): void  {

  }

  shouldAttach(route: ActivatedRouteSnapshot): boolean {
    return true;
  }

  retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle | null {
    return null;
  }

  shouldReuseRoute(future: ActivatedRouteSnapshot, curr: ActivatedRouteSnapshot): boolean {
    return true;
  }
}
