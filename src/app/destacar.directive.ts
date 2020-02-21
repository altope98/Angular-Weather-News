import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appDestacar]'
})
export class DestacarDirective {
@Input() appDestacar:string;
  constructor(public _el:ElementRef) {
    
   }

   ngOnInit(){
     this._el.nativeElement.style.backgroundColor= this.appDestacar || 'yellow';
   }

}
