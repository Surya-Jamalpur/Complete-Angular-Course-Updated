import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appIfNotTrue]'
})
export class IfNotTrueDirective {
@Input() set appIfNotTrue(condition:boolean) {
  if(!condition) {
    this.vcRef.createEmbeddedView(this.templt);
  } else {
    this.vcRef.clear();
  }

}
  constructor(private templt:TemplateRef<any>, private vcRef:ViewContainerRef) { }

}
