import { ABP, TreeNode } from '@abp/ng.core';
import { Component, Input } from '@angular/core';
import { NgbDropdownConfig } from '@ng-bootstrap/ng-bootstrap';

interface RoutedExtend extends ABP.Route{
  isExpanded: boolean;
}

@Component({
  selector: 'app-breadcrumb-items',
  templateUrl: './breadcrumb-items.component.html',
  styleUrls: ['./breadcrumb-items.component.scss']
})
export class BreadcrumbItemsComponent {
  @Input() node: TreeNode<ABP.Route>;
  collapsed = true;

  constructor(_ngbDropdownConfig: NgbDropdownConfig){
    _ngbDropdownConfig.autoClose = false;
  }

  expandSubMenu(child: ABP.Route){
    this.node.children.forEach(item => {
      const extendItem = (item as unknown as RoutedExtend);
      extendItem.isExpanded = child === item ? !extendItem.isExpanded : false;
    });
  }
}
