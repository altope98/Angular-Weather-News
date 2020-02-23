import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appDestacar]'
})
export class DestacarDirective {
@Input() appDestacar:string;
  constructor( private elementRef: ElementRef) {
    
   }

   ngAfterViewInit() {
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = this.appDestacar;
  }

}
