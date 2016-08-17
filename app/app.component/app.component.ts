import {GlobalService} from '../common/global.service';
import { Component, HostBinding, AfterViewInit} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';

@Component({
  selector: 'body',
  template: require('./app.template.html'),
  styles: [require('./app.component.scss')],
  directives: [ROUTER_DIRECTIVES]
})

export class AppComponent {
  @HostBinding('class.nav-sm') mobile_menu: any = false;
  @HostBinding('class.nav-md') desktop_menu: any = true;
  constructor (
    private globalSerice: GlobalService
  ) {
  };
}
