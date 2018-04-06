import { EventEmitter } from '@angular/core';

export abstract class BaseStep {
  generateText() {}
  sendNext: EventEmitter<any>;
}
