import { async, ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { Component } from '@angular/core';
import { NotificationsModule } from './notifications.module';
import { NotificationsService } from './notifications.service';
import { By } from '@angular/platform-browser';
import { cold, getTestScheduler, hot } from 'jasmine-marbles';

@Component({
  selector:'test',
  template: '<bbh-notifications-container></bbh-notifications-container>'
})
class TestComponent {
  constructor(private ns: NotificationsService) {}
  push() {
    this.ns.pushMessage('test');
  }
}

describe('Notifications Module', () => {
  let service: NotificationsService;
  let fixture: ComponentFixture<TestComponent>;
  beforeEach(async() => {
    TestBed.configureTestingModule({
      declarations:[TestComponent],
      imports:[NotificationsModule.forRoot()]
    }).compileComponents();
    fixture = TestBed.createComponent(TestComponent);
    service = TestBed.get(NotificationsService);
  });

  it('notification service  push should be called 2 times after two message pushes', async( () => {
    let pushSpy = spyOn(service, 'pushMessage');
    fixture.componentInstance.push();
    fixture.componentInstance.push();
    expect(pushSpy).toHaveBeenCalledTimes(2)
  }));

  it('notification service observable should emit 3 messages after 3 message pushes', fakeAsync(() => {
    let messages: string[] = [];
    service.getNotifications().subscribe(msg => {
      messages.push(msg);
    });
    fixture.componentInstance.push();
    fixture.componentInstance.push();
    fixture.componentInstance.push();
    tick(10000);
    expect(messages.length).toBe(3)
  }));

  it('generate notification on message push and remove after 10sec', fakeAsync( () => {
    fixture.componentInstance.push();
    tick();
    expect(fixture.debugElement.query(By.css('.notification')).nativeElement.innerText).toBe('test');
    tick(10000);
    expect(fixture.debugElement.query(By.css('.notification'))).toBeNull();
  }));

});

