import { Component } from '@angular/core';
import { NotificationsService } from './notifications.service';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { NotificationsModule } from './notifications.module';


@Component({
  selector: 'test',
  template: '<bbh-notifications-container></bbh-notifications-container>'
})
class TestComponent {
  constructor(private ns: NotificationsService){}
  push() {
    this.ns.pushMessage('test');
  }
}

describe('Notifications', () => {
  let fixture: ComponentFixture<TestComponent>;
  let service: NotificationsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations:[TestComponent],
      imports:[NotificationsModule.forRoot()]
    });
    fixture = TestBed.createComponent(TestComponent);
    service = TestBed.get(NotificationsService);
  });

  it('notification should be generated after push and removed after 10sec', fakeAsync(() => {
    let pushSpy = spyOn(service, 'pushMessage');
    fixture.componentInstance.push();

    fixture.detectChanges();
    tick(6000);
    fixture.detectChanges();
    tick(4000);
    expect(pushSpy).toHaveBeenCalled();
  }))


});
