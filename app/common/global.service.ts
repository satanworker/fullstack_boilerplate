import {Injectable} from '@angular/core';
import {Headers} from '@angular/http';
@Injectable()
export class GlobalService {
  public headers: Headers;
  constructor() {
    this.headers = new Headers({ 'Content-Type': 'application/json' });
  }
}
