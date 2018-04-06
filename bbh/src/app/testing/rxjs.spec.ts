import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/map';
import { cold, getTestScheduler } from 'jasmine-marbles';
import { filter, map, take } from 'rxjs/operators';
import { interval } from 'rxjs/observable/interval';

describe('rxjs', () => {
  it('should set up an interval', () => {
    let obs = interval(10, getTestScheduler()).pipe(
      map(x => x.toString()),
      take(6)
    )
    const expected = cold('-0-1-2-3-4-5|');
    expect(obs).toBeObservable(expected);
  });

});
describe('Interval', () => {
  it('should keeps only even numbers', () => {
    const source = interval(10, getTestScheduler()).pipe(
      take(10),
      filter(x => x % 2 === 0),
    );
    const expected = cold('-a-b-c-d-e|', {a: 0, b: 2, c: 4, d: 6, e: 8});

    expect(source).toBeObservable(expected);
  });
})
