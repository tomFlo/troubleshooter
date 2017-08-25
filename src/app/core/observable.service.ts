import {Subject} from 'rxjs/Subject';

export class ObservableService<T> {

  private subject = new Subject<T>();

  next(t: T): void {
    this.subject.next(t);
  }

  subscribe(callback): void {
    this.subject.subscribe((next: T) => callback(next));
  }

}
