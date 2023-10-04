import { ContentChildren, Directive, HostListener, QueryList } from '@angular/core';
import { KeyboardManagedItemDirective } from './keyboard-managed-item.directive';

enum ArrowDirection {
    LEFT = -1,
    RIGHT = 1
};

@Directive({ selector: '[appKm]' })
export class KeyboardManagerDirective {

    constructor() { }

    @ContentChildren(KeyboardManagedItemDirective) public items: QueryList<KeyboardManagedItemDirective> = null ;

    @HostListener('keydown', ['$event'])
    public manageKeyboard(event: KeyboardEvent): void {
        switch (event.key) {
            case 'ArrowUp':
                this.focusItem(ArrowDirection.RIGHT).focus();
                break;
            case 'ArrowDown':
                this.focusItem(ArrowDirection.LEFT).focus();
                break;
            case 'ArrowLeft':
                this.focusItem(ArrowDirection.LEFT).focus();
                break;
            case 'ArrowRight':
                this.focusItem(ArrowDirection.RIGHT).focus();
                break;
        }
    }

    public focusItem(direction: ArrowDirection): KeyboardManagedItemDirective {
        const items = this.items.toArray();
        const currentElementIndex = items.findIndex(item => item.isFocused());
        const targetElementIndex = currentElementIndex + direction;
        const targetElement = items[targetElementIndex];

        if (targetElement) {
            return targetElement;
        } 
        // else {
        //     return items[0];
        // }
        return direction === ArrowDirection.LEFT ? items[items.length - 1] : items[0];
    }
}
