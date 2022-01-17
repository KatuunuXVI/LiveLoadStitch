import { Injectable } from '@angular/core';
import {SitesService} from '../sites/sites.service';
import API from '@aws-amplify/api';

@Injectable({
  providedIn: 'root'
})
export class UnitsService {

  units = [
    {"id":2880,"siteId":1,"sitename":"Site #729","name":"Unit 179A","address":"Invalid Address","loadCount":35,"lastUsed":new Date("2020-09-29T06:18:44.425Z"),"position":{"lat":29.72986874961244,"lng":-95.43195108090036}},
    {"id":1611,"siteId":1,"sitename":"Site #729","name":"Unit 225E","address":"Invalid Address","loadCount":42,"lastUsed":new Date("2020-09-29T06:18:44.425Z"),"position":{"lat":29.72930257145278,"lng":-95.42291772233544}},
    {"id":5246,"siteId":1,"sitename":"Site #729","name":"Unit 326C","address":"Invalid Address","loadCount":30,"lastUsed":new Date("2020-09-29T06:18:44.425Z"),"position":{"lat":29.73501009807892,"lng":-95.4257122759154}},
    {"id":3118,"siteId":2,"sitename":"Site #343","name":"Unit 658D","address":"Invalid Address","loadCount":30,"lastUsed":new Date("2020-09-29T06:18:44.425Z"),"position":{"lat":29.752393958861536,"lng":-95.35819643561338}},
    {"id":4870,"siteId":2,"sitename":"Site #343","name":"Unit 815C","address":"Invalid Address","loadCount":8,"lastUsed":new Date("2020-09-29T06:18:44.425Z"),"position":{"lat":29.750353919719352,"lng":-95.36190541469027}},
    {"id":975,"siteId":2,"sitename":"Site #343","name":"Unit 651B","address":"Invalid Address","loadCount":3,"lastUsed":new Date("2020-09-29T06:18:44.425Z"),"position":{"lat":29.751577877914904,"lng":-95.35528625245239}},
    {"id":5846,"siteId":2,"sitename":"Site #343","name":"Unit 299D","address":"Invalid Address","loadCount":30,"lastUsed":new Date("2020-09-29T06:18:44.425Z"),"position":{"lat":29.7486979519148,"lng":-95.35873824698243}},
    {"id":9300,"siteId":2,"sitename":"Site #343","name":"Unit 198F","address":"Invalid Address","loadCount":42,"lastUsed":new Date("2020-09-29T06:18:44.425Z"),"position":{"lat":29.747042573092877,"lng":-95.35726378438953}},
    {"id":7055,"siteId":3,"sitename":"Site #278","name":"Unit 923B","address":"Invalid Address","loadCount":42,"lastUsed":new Date("2020-09-29T06:18:44.425Z"),"position":{"lat":29.687979695369886,"lng":-95.37235149454139}},
    {"id":6548,"siteId":3,"sitename":"Site #278","name":"Unit 116E","address":"Invalid Address","loadCount":4,"lastUsed":new Date("2020-09-29T06:18:44.425Z"),"position":{"lat":29.68622346405016,"lng":-95.38028604340931}},
    {"id":1705,"siteId":3,"sitename":"Site #278","name":"Unit 566F","address":"Invalid Address","loadCount":30,"lastUsed":new Date("2020-09-29T06:18:44.425Z"),"position":{"lat":29.6828633631784,"lng":-95.37638310064195}},
    {"id":2135,"siteId":3,"sitename":"Site #278","name":"Unit 965F","address":"Invalid Address","loadCount":0,"lastUsed":new Date("2020-09-29T06:18:44.425Z"),"position":{"lat":29.684178672503638,"lng":-95.37381541792136}},
    {"id":3111,"siteId":3,"sitename":"Site #278","name":"Unit 879F","address":"Invalid Address","loadCount":25,"lastUsed":new Date("2020-09-29T06:18:44.425Z"),"position":{"lat":29.681259342751105,"lng":-95.37881193546181}}
  ];

  getAllUnits(): any {
    // return this.units;
    const apiName = 'liveload-api';
    const path = '/units';
    const myInit = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    return API.get(apiName, path, myInit);
  }

  getSiteUnits(siteId): any {
    // const toReturn = this.units.filter((unit) => {
    //   // tslint:disable-next-line:triple-equals
    //   return unit.siteId == siteId;
    // });
    //
    // return (toReturn.length > 0) ? toReturn : this.units;
    const apiName = 'liveload-api';
    const path = '/units';
    const myInit = {
      queryStringParameters: {  // OPTIONAL
        site_id: siteId,
      },
      headers: {
        'Content-Type': 'application/json',
      },
    };
    return API.get(apiName, path, myInit);
  }

  editUnit(unit): void{
    for (const toEdit of this.units) {
      if (toEdit.id === unit.id) {
        for (const field in toEdit) {
          if (toEdit.hasOwnProperty(field) && unit.hasOwnProperty(field)) {
            toEdit[field] = unit[field];
          }
        }
        break;
      }
    }
  }


  constructor(private sServ: SitesService) {}
  //
  // genUnits(): void {
  //   this.units = [];
  //   const sites = this.sServ.getSites();
  //   sites.forEach((site) => {
  //     const num = Math.random() * 3 + 2;
  //     for (let i = 0; i < num; i++) {
  //       this.units.push({
  //         id: Math.trunc(9999 * Math.random()),
  //         siteId: site.id,
  //         sitename: site.name,
  //         name: 'Unit ' + Math.trunc(899 * Math.random() + 100) + this.letList.charAt(Math.trunc(6 * Math.random())),
  //         address: 'Invalid Address',
  //         loadCount: Math.trunc(50 * Math.random()),
  //         lastUsed: new Date(),
  //         position: this.genLoc(site.center)
  //       });
  //     }
  //   });
  //
  //   console.log(JSON.stringify(this.units));
  // }

  genLoc(centerLoc): any {
    const rlat = centerLoc.lat + (Math.random() * 0.01);
    const rlng = centerLoc.lng + (Math.random() * 0.01);
    return {lat: rlat, lng: rlng};
  }
}
