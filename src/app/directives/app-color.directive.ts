import { Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appAppColor]'
})
export class AppColorDirective  implements OnInit{

  @Input() colorEnter: string;
  @Input() colorLeave: string;

  constructor(public elementRef: ElementRef) {
  }

  ngOnInit(): void {
    this.elementRef.nativeElement.style.backgroundColor = this.colorLeave;
  }

  @HostListener('mouseenter') onMouseEnter() {

    this.elementRef.nativeElement.style.backgroundColor = this.colorEnter;

  }

  @HostListener('mouseleave') onMouseLeave() {

    this.elementRef.nativeElement.style.backgroundColor = this.colorLeave;

  }

}



