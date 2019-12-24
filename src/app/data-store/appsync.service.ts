import {Injectable} from '@angular/core';
import AWSAppSyncClient from 'aws-appsync';
import {AUTH_TYPE} from 'aws-appsync/lib/link/auth-link';

@Injectable()
export class AppsyncService {

  _hc;

  constructor() {
    const client = new AWSAppSyncClient({
      url: 'https://e2uslbpjzzbftiyvaufaf2ghzm.appsync-api.ap-southeast-2.amazonaws.com/graphql',
      region: 'ap-southeast-1',
      auth: {
        type: AUTH_TYPE.API_KEY,
        apiKey: 'da2-e6xfolswuvdavgdmkz4a7woiwa'
      }
    });
    this._hc = client;
  }

  hc() {
    return this._hc.hydrated();
  }
}
