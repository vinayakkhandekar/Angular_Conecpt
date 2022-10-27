import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appNormal]'
})
export class NormalDirective {

  constructor(private el:ElementRef,private rt:Renderer2) { 
    el.nativeElement.style.backgroundColor="yellow";
    rt.setStyle(el.nativeElement,"backgroundColor","yellow")

  }

}
