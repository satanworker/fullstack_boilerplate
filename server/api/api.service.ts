import { DBClient } from './../db/db.client';
import { GlobalService } from '../common/global.service';
import * as path from 'path';
import * as express from 'express';
import * as bodyParser from 'body-parser';
import { Settings } from '../../app/common/config';
export class APIHandler {
    constructor(
        private globalService: GlobalService,
        private db: DBClient
    ) { }
    routes() {
        this.globalService.app.get('**', (req, res, next) => {
            res.sendFile(path.resolve(__dirname + '/../../public/index.html'));
        });
    }
}
