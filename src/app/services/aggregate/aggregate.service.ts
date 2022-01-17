import { Injectable } from '@angular/core';
import {LoadsService} from '../loads/loads.service';
import {ActivatedRoute} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AggregateService {


  getGroupKey(loadObj, group): Date {
    const date = new Date(loadObj.time);
    if (group === 'hour') {
      return new Date(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours());
    } else if (group === 'day') {
      return new Date(date.getFullYear(), date.getMonth(), date.getDate());
    } else if (group === 'week') {
      const onejan = new Date(date.getFullYear(), 0, 1);
      const today = new Date(date.getFullYear(), date.getMonth(), date.getDate());
      const dayOfYear = ((today.getTime() - onejan.getTime() + 86400000) / 86400000);
      const weekNumber = Math.ceil(dayOfYear / 7);

      return new Date(onejan.getTime() + ((weekNumber - 1) * 7 * 86400000));
    } else if (group === 'month') {
      return new Date(date.getFullYear(), date.getMonth(), 1);
    }

    return date;
  }

  aggregateLoads(loads, groupBy, aggregateField): any {
    const loadsGrouped = loads.reduce((acc, d) => {
      const p = this.getGroupKey(d, groupBy).toLocaleString();
      if (!acc[0].hasOwnProperty(p)) {
        acc[0][p] = [];
      }
      acc[0][p].push(d);
      return acc;
    }, [{}])
        .reduce((acc, v) => {
          Object.keys(v).forEach((k) => {
            acc.push({group: k, loads: v[k]});
          });
          return acc;
        }, []);

    const loadsReduced = loadsGrouped.map((group) => {
      let accValue;
      if (aggregateField === 'trucks') {
        const truckCounts  = {};
        for (const load of group.loads) {
          truckCounts[load.truck_id] = 1;
        }
        accValue = Object.keys(truckCounts).length;
      } else {
        accValue = group.loads.reduce((acc, d) => {
          let nextVal = 1;
          if (aggregateField === 'costs') {
            nextVal = d.payload * d.unit_rate;
          } else if (aggregateField === 'volume') {
            nextVal = d.struck_capacity;
          }
          return acc + nextVal;
        }, 0);
      }

      return {name: new Date(group.group), value: accValue};
    });

    return loadsReduced;
  }


  getAggregateData(startTime, endTime, groupBy, aggregateField, site): any {
    if (site) {
      return this.lServ.getLoadsRangeBySite(startTime, endTime, site).then(loads => {
        return this.aggregateLoads(loads, groupBy, aggregateField);
      });
    } else {
      return this.lServ.getLoadsRange(startTime, endTime).then(loads => {
        return this.aggregateLoads(loads, groupBy, aggregateField);
      });
    }
  }



  constructor(private lServ: LoadsService) { }
}
