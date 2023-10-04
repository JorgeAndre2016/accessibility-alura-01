import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KeyboardManagerDirective } from './keyboard-manager.directive';
import { KeyboardManagedItemDirective } from './keyboard-managed-item.directive';

@NgModule({
    imports: [CommonModule],
    exports: [
        KeyboardManagerDirective, 
        KeyboardManagedItemDirective
    ],
    declarations: [
        KeyboardManagerDirective,
        KeyboardManagedItemDirective
    ],
    providers: [],
})
export class KeyboardManagerModule { }
