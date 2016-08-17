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
    login(email, password) {
        return new Observable((observer) => {
            let query = 'SELECT * FROM denta.users WHERE email=? AND password=? ALLOW FILTERING';
            this.client.execute(query, [email, password], (err, result) => {
                if (err) {
                    return observer.error(err);
                }
                if (result) {
                    observer.next(JSON.stringify(result.rows[0]));
                }
            });
        });
    }
    signup(email, password) {
    }
}
