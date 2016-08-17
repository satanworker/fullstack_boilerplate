import { Headers } from '@angular/http';
import { GlobalService } from './global.service';
import {Component, Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Settings} from '../common/config.ts';

@Injectable()

export class HttpService {
  private headers: Headers;
  constructor (
    private http: Http,
    private globalService: GlobalService
  ) {
    this.headers = this.globalService.headers;
  }
}
