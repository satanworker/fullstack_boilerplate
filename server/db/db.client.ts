import { GlobalService } from './../common/global.service';
import {Observable} from 'rxjs';
let cassandra = require('cassandra-driver');
export class DBClient {
    private client: any;
    constructor(
        private globalService: GlobalService
    ) {
        this.client = this.globalService.DBClient;
    }
    connect() {
        this.client = new cassandra.Client({ contactPoints: ['127.0.0.1'] });
        this.client.connect((err, result) => {
            if (err) {
                return console.log('client connect error');
            }
        });
    }
}
