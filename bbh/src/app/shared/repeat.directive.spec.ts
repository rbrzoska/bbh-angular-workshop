import { RepeatDirective } from './repeat.directive';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';


@Component({
  selector:'test',
  template: ''
})
class TestComponent {
  val = 3;
}

const TEMPLATE = '<div *bbhRepeat="let index in val">{{index}}</div>';

function createTestComponent(template: string = TEMPLATE): ComponentFixture<TestComponent> {
  return TestBed
    .overrideComponent(TestComponent, {set: {template: template}})
    .createComponent(TestComponent)
}

describe('RepeatDirective', () => {

  let fixture: ComponentFixture<any>;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestComponent, RepeatDirective]
    })
    }
  );

  afterEach(() => {
    fixture = null;
  });

  it('should repeat div element 3 times with numbers from 1 to 3', () => {
    fixture = createTestComponent();
    fixture.componentInstance.val = 3;
    fixture.detectChanges();
    const elements = fixture.debugElement.queryAll(By.css('div'));
    expect(elements.length).toBe(3);
    expect(elements.map(x => (<HTMLElement>x.nativeElement).innerText).join('')).toBe('123')
  });
});

