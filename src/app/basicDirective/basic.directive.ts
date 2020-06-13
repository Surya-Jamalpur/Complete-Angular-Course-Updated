import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
    selector:'[appBasic]'
})
export class basicDirectinve implements OnInit {
    constructor(private element: ElementRef){

    }
    ngOnInit(){
        this.element.nativeElement.style.background='red';
    }
}