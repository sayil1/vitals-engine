import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import * as dayjs from 'dayjs';
import { map, Observable } from 'rxjs';

@Injectable()
export class AppService {
  constructor(private readonly httpService: HttpService) {}
  saveDataToMachine(data: any): any {
    // console.log(ndata, 'coming data', new Date().toISOString());
    // console.table(data);
    return this.httpService
      .post(
        'https://develop.drsavealife.com/v1/records-api/records/vitals/create-from-machine',
        data,
      )
      .pipe(map((resp) => resp.data));
  }

  saveData(data: any) {
    console.log(data, 'coming data', new Date().toISOString());
    return data;
  }
}
