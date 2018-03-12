import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[bbhRepeat]'
})
export class RepeatDirective {

  private _pages: number;

  @Input()
  set bbhRepeatIn(pagesNumber: number) {
    for(let i = 1; i <= pagesNumber; i++) {
      var test = this.viewRef.createEmbeddedView(this.temp, {
        $implicit: i,
        index2: i*2
      })
    }
  }

  constructor(private viewRef: ViewContainerRef,
              private temp: TemplateRef<any>) { }

}
