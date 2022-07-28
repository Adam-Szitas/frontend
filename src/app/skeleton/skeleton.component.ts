import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from 'rxjs';
import { CompanyFacadeService } from '../services/facade/company.service';

@Component({
    selector: 'app-skeleton-root',
    templateUrl: './skeleton.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SkeletonComponent {
    constructor(private companyFacade: CompanyFacadeService) {}

    title = 'Skeleton';

    public companyName$: Observable<string | null> = this.companyFacade.companyData.company.companyName$;
}
