import { Injectable } from '@angular/core';
import {TrucksService} from '../survey/trucks.service';
import {UnitsService} from '../units/units.service';
import {HttpClient} from '@angular/common/http';
import { Auth } from 'aws-amplify';
import {Observable} from 'rxjs';
import API from '@aws-amplify/api';
import { NoopScrollStrategy } from '@angular/cdk/overlay';

@Injectable({
  providedIn: 'root'
})
export class LoadsService {

  loads = [];

  constructor(private tServ: TrucksService, private uServ: UnitsService) {
    // this.genLoads();
    // this.genCSVLoads();
  }


  getLoads(): any {
    const apiName = 'liveload-api';
    const path = '/productivity';
    const myInit = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    return API.get(apiName, path, myInit).then(data => {
      return data.map(load => {
        load.time = new Date(load.time_loaded);
        // console.log('GL Load: ' + JSON.stringify(load));
        return load;
      });
    });
  }

  updateLoadsFactor(load_id, value): any{
    console.log("Entered")
    console.log(load_id, value)
    const apiName = 'liveload-api';
    const path = '/updateLoadsFactor';
    const myInit = {
      OPTIONS: {
        'Access-Control-Allow-Origin' : '*',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Credentials' : true,
      },
      body: {
        'id': load_id,
        'value': value
      }
    };
    return API.put(apiName, path, myInit).then(data => {
      console.log(data);
    }).catch(error => {
      console.log(error.response);
    });
  }

  getLoadsRange(start, end): any {
    const apiName = 'liveload-api';
    const path = '/productivity';
    const myInit = {
      queryStringParameters: {  // OPTIONAL
        start_time: this.pgFormatDate(start),
        end_time: this.pgFormatDate(end)
      },
      headers:  {
        'Content-Type': 'application/json',
      },
    };
    return API.get(apiName, path, myInit).then(data => {
      return data.map(load => {
        load.time = new Date(load.time_loaded);
        return load;
      });
    });

  }

  getLoadsRangeBySite(start, end, siteId): any {
    // TODO: remove this from being used, use units and then the below
    return this.getLoads().then(loads => {
      return loads.filter((load) => {
        const curTime = new Date(load.time);
        return start < curTime && curTime < end && load.site === siteId;
      });
    });

    // this.uServ.getSiteUnits(siteId).then(units => {
    //   const productivity = [];
    //   for (const unit of units) {
    //     let curLoads = await this.getLoadsRangeByUnit(start, end, unit.unit_id);
    //   }
    // });
  }

  getLoadsRangeByUnit(start, end, unitId): any {
    const apiName = 'liveload-api';
    const path = '/productivity';
    const myInit = {
      queryStringParameters: {  // OPTIONAL
        unit_id: unitId,
        start_time: this.pgFormatDate(start),
        end_time: this.pgFormatDate(end)
      },
      headers: {
        'Content-Type': 'application/json',
      },
    };
    return API.get(apiName, path, myInit).then(data => {
      return data.map(load => {
        load.time = new Date(load.time_loaded);
        return load;
      });
    });
  }

  pgFormatDate(date): string {
    /* Via http://stackoverflow.com/questions/3605214/javascript-add-leading-zeroes-to-date */
    function zeroPad(d): any {
      return ('0' + d).slice(-2);
    }

    const parsed = new Date(date);

    return parsed.getUTCFullYear() + '-' +
        zeroPad(parsed.getMonth() + 1) + '-' +
        zeroPad(parsed.getDate()) + ' ' +
        zeroPad(parsed.getHours()) + ':' +
        zeroPad(parsed.getMinutes()) + ':' +
        zeroPad(parsed.getSeconds()) + '.' +
        zeroPad(parsed.getMilliseconds());
  }

  genLoads(): void {
    this.loads = [];
    const units = this.uServ.getAllUnits();
    const trucks = this.tServ.getTrucks();
    trucks.forEach((truck) => {
      const num = Math.random() * 150 + 150;
      for (let i = 0; i < num; i++) {
        const curUnit = units[Math.trunc(Math.random() * units.length)];
        this.loads.push({
          truck: truck.truck,
          ticket: Math.trunc(899999999 * Math.random() + 100000000),
          time: this.randomDate().toLocaleString(),
          cycle: this.randCycle(),
          unit: curUnit.name,
          site: curUnit.sitename,
          volume: Math.trunc(15 * Math.random() + 20),
          capacity: Math.trunc(30 * Math.random() + 1),
          payload: Math.trunc(30 * Math.random() + 1),
          speed: Math.trunc(30 * Math.random() + 1),
          rate: Math.trunc(20 * Math.random() + 30),
          quantity: Math.trunc(10 * Math.random() + 20),
          shrink: Math.trunc(0.8 * Math.random()),

        });
      }
    });
    console.log(JSON.stringify(this.loads));
  }

  randCycle(): string {
    const d = '00';
    const h = (Math.random() > 0.5) ? '00' : '01';
    const m = Math.trunc(60 * Math.random());
    const mPre = (m < 10) ? '0' : '';
    const s = Math.trunc(60 * Math.random());
    const sPre = (s < 10) ? '0' : '';

    return d + '.' + h + ':' + mPre + m + ':' + sPre + s;
  }

  randomDate(): Date {
    const start = new Date();
    start.setDate(start.getDate() - 60);
    const end = new Date();
    end.setDate(end.getDate() + 120);
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  }

  genCSVLoads(): void {
    const agreements = [1,2,3,4,5,6];
    const trucks = [10,11,12,13,14,15,16,17,18];
    const units = [3,4,5,6,7,8,9,10,11,12,13,14,15];
    let text = '';
    for (let i = 0; i < 5000; i++) {
      const line = '(1' + ',' +
          agreements[Math.floor(Math.random() * agreements.length)] + ',' +
          trucks[Math.floor(Math.random() * trucks.length)] + ',' +
          units[Math.floor(Math.random() * units.length)] + ',' +
          Math.trunc(30 * Math.random() + 1) + ',' +
          '\'' + this.randomDate().toISOString() + '\''  + ',' +
          Math.trunc(30 * Math.random() + 1) + ',' +
          Math.trunc(30 * Math.random() + 1) + ')';
      text += ',\n' + line;
    }
    console.log(text);
  }


}
