import { NgModule } from '@angular/core';

import { DisableControlDirective } from './disable-control.directive';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [CommonModule],
    exports: [DisableControlDirective],
    declarations: [DisableControlDirective],
    providers: [],
})
export class DisableControlModule { }
