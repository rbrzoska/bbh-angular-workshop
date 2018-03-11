import { Injectable } from '@angular/core';

@Injectable()
export class CustomRendererService {

  setFocus(nativeElement: any) {
    nativeElement.focus();
  }

}
