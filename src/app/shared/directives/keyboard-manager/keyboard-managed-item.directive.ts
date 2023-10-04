import { Directive, ElementRef, EventEmitter, Output } from '@angular/core';

@Directive({ selector: '[appKmItem]' })
export class KeyboardManagedItemDirective {

    @Output() public focuded = new EventEmitter<void>();

    constructor(private elementRef: ElementRef<HTMLElement>) { }

    public focus(): void {
        this.elementRef.nativeElement.focus();
        this.focuded.emit();
    }

    public isFocused(): boolean {
        return (document.activeElement === this.elementRef.nativeElement);
    }
}