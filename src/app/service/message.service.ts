import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private messageSubject: BehaviorSubject<string> = new BehaviorSubject<string>('');

  constructor() { }

  setMessage(message: string): void {
    this.messageSubject.next(message);
  }

  getMessage(): Observable<string> {
    return this.messageSubject.asObservable();
  }
}
