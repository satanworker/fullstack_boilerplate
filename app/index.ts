import { HTTP_PROVIDERS} from '@angular/http';
import { bootstrap } from '@angular/platform-browser-dynamic';
import {provideRouter} from '@angular/router';
import { AppComponent } from './app.component/app.component';
import {routes} from './app.routes';
import {GlobalService} from './common/global.service';

bootstrap( AppComponent, [
    HTTP_PROVIDERS,
    provideRouter(routes),
    GlobalService
]);
