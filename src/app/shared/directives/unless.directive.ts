import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';

@Directive({ selector: '[appMyUnless]'})
export class UnlessDirective {
    constructor(
        private templateRef: TemplateRef<any>,
        private viewContainer: ViewContainerRef) {
        }

    @Input() set appMyUnless(condition: boolean) {
        if (!condition) {
            this.viewContainer.createEmbeddedView(this.templateRef);
        } else {
            this.viewContainer.clear();
        }
    }
}
