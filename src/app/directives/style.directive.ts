import {
  Directive,
  ElementRef,
  Host,
  HostBinding,
  HostListener,
  Input,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appStyle]',
})
export class styleDirective {
  @Input() dStyle = {
    color: 'string',
    border: 'string',
    fontSize: 'string',
    fontWeigth: 'string',
    borderRadius: 'string',
    padding: 'string',
  };

  constructor(private el: ElementRef, private r: Renderer2) {
    // el.nativeElement.style.color = 'red';
  }
  @HostListener('mouseenter') onEnter() {
    this.r.setStyle(this.el.nativeElement, 'color', this.dStyle.color);
    this.r.setStyle(this.el.nativeElement, 'border', this.dStyle.border);
    this.r.setStyle(
      this.el.nativeElement,
      'borderRadius',
      this.dStyle.borderRadius
    );
    this.r.setStyle(
      this.el.nativeElement,
      'fontWeigth',
      this.dStyle.fontWeigth
    );
    this.r.setStyle(this.el.nativeElement, 'fontSize', this.dStyle.fontSize);
    this.r.setStyle(this.el.nativeElement, 'padding', this.dStyle.padding);
  }
  @HostListener('mouseleave') onLeave() {
    this.r.setStyle(this.el.nativeElement, 'color', null);
    this.r.setStyle(this.el.nativeElement, 'border', null);
    this.r.setStyle(this.el.nativeElement, 'borderRadius', null);
    this.r.setStyle(this.el.nativeElement, 'fontWeigth', null);
    this.r.setStyle(this.el.nativeElement, 'fontSize', null);
  }
}
