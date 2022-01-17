import { Injectable } from '@angular/core';
import { Auth } from 'aws-amplify';
import API from '@aws-amplify/api';



@Injectable({
  providedIn: 'root'
})
export class TrucksService {

  trucks = [
    {"id":6125,"truck":"T39282989","tag":"27718","axles":6,"color":"Red","vollogged":53,"lifetime":49},
    {"id":2272,"truck":"T54587495","tag":"77354","axles":6,"color":"Orange","vollogged":52,"lifetime":29},
    {"id":9515,"truck":"T13402528","tag":"71202","axles":6,"color":"Yellow","vollogged":22,"lifetime":84},
    {"id":2472,"truck":"T85523956","tag":"38071","axles":8,"color":"Green","vollogged":69,"lifetime":86},
    {"id":5856,"truck":"T11930594","tag":"11637","axles":6,"color":"Blue","vollogged":36,"lifetime":29},
    {"id":2622,"truck":"T46609321","tag":"99993","axles":8,"color":"Purple","vollogged":23,"lifetime":49},
    {"id":6192,"truck":"T47773843","tag":"33059","axles":6,"color":"Grey","vollogged":53,"lifetime":29},
    {"id":2089,"truck":"T90053817","tag":"10600","axles":8,"color":"Black","vollogged":19,"lifetime":45},
    {"id":4693,"truck":"T90341858","tag":"92604","axles":8,"color":"White","vollogged":11,"lifetime":89},
    {"id":2603,"truck":"T14288943","tag":"94037","axles":4,"color":"Silver","vollogged":45,"lifetime":28},
    {"id":7120,"truck":"T90455477","tag":"42937","axles":2,"color":"Red","vollogged":78,"lifetime":58},
    {"id":1213,"truck":"T21842204","tag":"55233","axles":10,"color":"Blue","vollogged":65,"lifetime":68},
    {"id":9879,"truck":"T40779639","tag":"96976","axles":6,"color":"Silver","vollogged":36,"lifetime":20},
    {"id":6889,"truck":"T24824072","tag":"98433","axles":4,"color":"Silver","vollogged":4,"lifetime":18},
    {"id":4545,"truck":"T39462327","tag":"16735","axles":2,"color":"White","vollogged":55,"lifetime":41}
  ];

  trucksReal = [
    {"id":6125,"truck":"BVSD","tag":"27718","axles":6,"color":"Red","vollogged":53,"lifetime":49},
    {"id":2272,"truck":"CDAS","tag":"77354","axles":6,"color":"Orange","vollogged":52,"lifetime":29},
    {"id":9515,"truck":"ERL1","tag":"71202","axles":6,"color":"Yellow","vollogged":22,"lifetime":84},
    {"id":2472,"truck":"XGDF","tag":"38071","axles":8,"color":"Green","vollogged":69,"lifetime":86},
    {"id":5856,"truck":"YTHG","tag":"11637","axles":6,"color":"Blue","vollogged":36,"lifetime":29},
    {"id":2622,"truck":"ZFRD","tag":"99993","axles":8,"color":"Purple","vollogged":23,"lifetime":49}
  ];

  getTrucks(): any {
    const apiName = 'liveload-api';
    const path = '/survey';
    const myInit = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    return API.get(apiName, path, myInit);
    // return Auth.currentUserInfo().then(userData => {
    //   if (userData.username === 'liveUser') {
    //     return this.trucksReal;
    //   } else {
    //     return this.survey;
    //   }
    // });
  }

  addTruck(truck): void {
    if (!truck.id) {
      truck.id = Math.trunc(8999 * Math.random() + 1000);
    }
    this.trucks.push(truck);
  }

  removeTruck(id): void {
    for (let i = 0; i < this.trucks.length; i++) {
      if (this.trucks[i].id === id) {
        this.trucks.splice(i, 1);
      }
    }
  }

  editTruck(truck): void {
    for (let i = 0; i < this.trucks.length; i++) {
      if (this.trucks[i].id === truck.id) {
        this.trucks[i] = truck;
        break;
      }
    }
  }

  constructor() {
    // for (let i = 0; i < 15; i++) {
    //   this.survey.push({
    //     id: Math.trunc(8999 * Math.random() + 1000),
    //     truck: 'T' + Math.trunc(89999999 * Math.random() + 10000000),
    //     tag: '' + Math.trunc(89999 * Math.random() + 10000),
    //     axles: Math.trunc(5 * Math.random() + 1) * 2,
    //     color: 'Red',
    //     vollogged: Math.trunc(90 * Math.random()),
    //     lifetime: Math.trunc(90 * Math.random())
    //   });
    // }
    // console.log(JSON.stringify(this.survey));
  }
}
