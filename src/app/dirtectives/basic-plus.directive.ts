import { Directive, ElementRef, Renderer2, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appBasicPlus]'
})
export class BasicPlusDirective {
  @Input() defaultColor = 'gray';
  @Input() activeColor = 'gray';
  @HostBinding('style.color') color:string = 'black'
  constructor(private elRef:ElementRef, private renderar:Renderer2) { }
  ngOnInit(){
    // this.renderar.setStyle(this.elRef.nativeElement, 'color','#fff')
  }
  @HostListener('mouseenter') mousrover(eveData: Event){
    // this.renderar.setStyle(this.elRef.nativeElement, 'color','#fff')
    this.color="red";
  }
  @HostListener('mouseleave') mousrleave(eveData: Event){
    // this.renderar.setStyle(this.elRef.nativeElement, 'color','green');
    this.color="green";
  }
}
