import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appRepeat]'
})
export class RepeatDirective {

  private _pagesNumber: number;

  @Input()
  set appRepeatOf(num: number) {
    this._pagesNumber = num;
    for(let i = 1; i < num;i++) {
      this.viewRef.createEmbeddedView(this.temp,{
        $implicit: i
      })
    }
  };

  constructor(private viewRef: ViewContainerRef, private temp: TemplateRef<any>) { }


}
