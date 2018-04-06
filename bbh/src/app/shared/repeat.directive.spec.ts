import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RepeatDirective } from './repeat.directive';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { By } from '@angular/platform-browser';

@Component({
  selector: 'test',
  template: ''
})
class TestComponent {
  value = 2;
}

function createTestComponent(template: string = '<div *bbhRepeat="let index in value">{{index}}</div>') {
  return TestBed.overrideComponent(TestComponent, {
    set: {
      template: template
    }
  }).createComponent(TestComponent)
}

describe('Repeat Directive', () => {
  let fixture: ComponentFixture<TestComponent>;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations:[RepeatDirective, TestComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    });
  });

  afterEach(() => {

  });

  it('iterates and render given number', () => {
    fixture = createTestComponent();
    fixture.detectChanges();
    const divs = fixture.debugElement.queryAll(By.css('div'));
    expect(divs.length).toBe(2);
    expect(divs
      .map(x => (<HTMLElement>x.nativeElement).innerText)
      .join()).toBe('1,2')
  })

  it('iterates and render given number multiplied by 2', () => {
    const template = '<div *bbhRepeat="let index in value; let index2=index2">{{index}} <span>{{index2}}</span></div>'
    fixture = createTestComponent(template);
    fixture.detectChanges();
    const spans = fixture.debugElement.queryAll(By.css('span'));
    expect(spans.length).toBe(2);
    expect(spans
      .map(x => (<HTMLElement>x.nativeElement).innerText)
      .join()).toBe('2,4')
  })
});
