import { Component, inject } from "@angular/core";
import { DatatableComponent } from '@swimlane/ngx-datatable';
import { ListService, LocalizationService } from '@abp/ng.core';
import { ActivatedRoute, Router } from '@angular/router';
import { SWConfirmationService } from '../../components/confirmation/service/confirmation.service';
import { ToasterService } from "@abp/ng.theme.shared";
import { ListFilterService } from "./list-filter.service";


@Component({selector: 'abstract-list-component', template: ''})
export abstract class AbstractListComponent {
    public readonly list = inject(ListService);
    protected readonly route = inject(Router);
    protected readonly activatedRoute = inject(ActivatedRoute);
    protected readonly confirmationService = inject(SWConfirmationService);
    protected readonly toasterService = inject(ToasterService);
    protected readonly localizationService = inject(LocalizationService);
    protected readonly filterListService = inject(ListFilterService);

    public onPageSizeChange(limit: number, table: DatatableComponent): void {
        table.limit = limit;
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
