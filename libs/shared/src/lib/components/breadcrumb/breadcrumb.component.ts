import {
  ABP,
  getRoutePath,
  PermissionService,
  RouterEvents,
  RoutesService,
  SubscriptionService,
  TreeNode,
} from '@abp/ng.core';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, startWith } from 'rxjs/operators';

const enum eThemeSharedRouteNames {
  Administration = 'AbpUiNavigation::Menu:Administration',
}

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [SubscriptionService],
})
export class BreadcrumbComponent implements OnInit {
  @Input() isParentRoute: boolean = false;
  node: TreeNode<ABP.Route>;

  constructor(
    public readonly cdRef: ChangeDetectorRef,
    private router: Router,
    private routes: RoutesService,
    private activateRoute: ActivatedRoute,
    private subscription: SubscriptionService,
    private routerEvents: RouterEvents,
    private permissionService: PermissionService
  ) { }

  ngOnInit(): void {
    let isHasParams = Object.keys(this.activateRoute.snapshot.params).length > 0;

    const url = getRoutePath(this.router);
    const urlTree = this.router.parseUrl(url);
    let segments = urlTree.root.children['primary'].segments
    if(isHasParams){
      segments = segments.slice(0, segments.length - 1);
    }
    let router = segments.map(it => it.path).join('/');
    if(this.isParentRoute){
      let routes = router.split('/');
      router = routes.slice(0, routes.length - 1).join('/')
    }

    this.subscription.addOne(
      this.routerEvents.getNavigationEvents('End').pipe(
        startWith(null),
        map(() => this.routes.search({path: router}) ?? this.routes.search({path: '/' + router}) ),
      ),
      route => {
        if (route) {
          let node = { parent: route } as TreeNode<ABP.Route>;

          while (node.parent) {
            node = node.parent;
          }

          if (!this.isAdministration(node)) {
            node.children = node.children.filter(child=>this.permissionService.getGrantedPolicy(child.requiredPolicy));
            this.node = node;
            this.cdRef.detectChanges();
          }

        }
      },
    );
  }

  isAdministration(route: Pick<ABP.Route, 'name'>) {
    return route.name === eThemeSharedRouteNames.Administration;
  }
}


