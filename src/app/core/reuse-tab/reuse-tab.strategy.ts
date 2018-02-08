import { RouteReuseStrategy, ActivatedRouteSnapshot, DetachedRouteHandle } from '@angular/router';
import { ReuseTabService } from './reuse-tab.service';

export class ReuseTabStrategy implements RouteReuseStrategy {
    constructor(private reuseTabService: ReuseTabService) { }

    shouldDetach(route: ActivatedRouteSnapshot): boolean {
        return this.reuseTabService.shouldDetach(route);
    }
    store(route: ActivatedRouteSnapshot, handle: DetachedRouteHandle | null): void {
        this.reuseTabService.store(route, handle);
    }
    shouldAttach(route: ActivatedRouteSnapshot): boolean {
        return this.reuseTabService.shouldAttach(route);
    }
    retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle | null {
        return this.reuseTabService.retrieve(route);
    }
    shouldReuseRoute(future: ActivatedRouteSnapshot, curr: ActivatedRouteSnapshot): boolean {
        return this.reuseTabService.shouldReuseRoute(future, curr);
    }

}
