import { Component, Inject, Injector, OnInit, inject } from "@angular/core";
import { AbstractListComponent } from "./abstract-list.component";
import { ListFilterService } from "./list-filter.service";
import { AppStatusService, UiStatus } from "../../service/app-status.service";
import { AbstractQuickSearchFilterComponent } from "./abstract-quick-search-filter.component";
import { ToasterService } from "@abp/ng.theme.shared";
import { Router, ActivatedRoute } from "@angular/router";
import { DatatableComponent } from "@swimlane/ngx-datatable";
import { SWConfirmationService } from "../../components/confirmation/service/confirmation.service";
import { LocalizationService } from "@abp/ng.core";

@Component({template: ''})
export abstract class AbstractStandAloneListComponent extends AbstractQuickSearchFilterComponent {
    protected readonly route = inject(Router);
    protected readonly activatedRoute = inject(ActivatedRoute);
    protected readonly confirmationService = inject(SWConfirmationService);
    protected readonly toasterService = inject(ToasterService);
    protected readonly localizationService = inject(LocalizationService);
    protected readonly filterListService = inject(ListFilterService);

    public onPageSizeChange(limit: number, table: DatatableComponent = undefined): void {
        if(table) { table.limit = limit }
        this.list.maxResultCount = limit;
        this.list.page = 0;
    }
    public onPageNumberChange(count: number): void {
    this.list.page = count - 1;
    }
    public create() {
        this.route.navigate(['create'], { relativeTo: this.activatedRoute });
    }
    public edit(id: number) {
        this.route.navigate(['update/' + id], { relativeTo: this.activatedRoute });
    }
    public viewDetails(id: number) {
        this.route.navigate([`details/${id}`], { relativeTo: this.activatedRoute });
    }
}
