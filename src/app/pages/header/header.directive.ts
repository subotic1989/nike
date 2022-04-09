import { HostListener } from '@angular/core';
import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHeader]',
})
export class HeaderDirective implements OnInit {
  constructor(private renderer: Renderer2, private elRef: ElementRef) {}

  ngOnInit(): void {
    // this.elRef.nativeElement.style.color = 'red';
    // this.renderer.setStyle(
    //   this.elRef.nativeElement,
    //   'background-color',
    //   'blue'
    // );
  }

  @HostListener('mouseenter') test(e: any) {
    // this.elRef.nativeElement.style.color = 'red';
    // document.querySelectorAll('a').forEach((el) => {
    //   el.style.color = 'red';
    //   console.log(el);
    // });
  }
}
