import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CostsService {

  costsData = [
    {
      "name": "Site #123",
      "series": [
        {"name": new Date(2020, 6, 16), "value": 620},
        {"name": new Date(2020, 6, 17), "value": 720},
        {"name": new Date(2020, 6, 18), "value": 530},
        {"name": new Date(2020, 6, 19), "value": 540},
        {"name": new Date(2020, 6, 20), "value": 630},
        {"name": new Date(2020, 6, 21), "value": 540},
        {"name": new Date(2020, 6, 22), "value": 610},
        {"name": new Date(2020, 6, 23), "value": 490},
        {"name": new Date(2020, 6, 24), "value": 530},
        {"name": new Date(2020, 6, 25), "value": 520},
        {"name": new Date(2020, 6, 26), "value": 660},
        {"name": new Date(2020, 6, 27), "value": 560},
        {"name": new Date(2020, 6, 28), "value": 610},
        {"name": new Date(2020, 6, 29), "value": 710},
        {"name": new Date(2020, 6, 30), "value": 700},
        {"name": new Date(2020, 6, 31), "value": 630},
        {"name": new Date(2020, 7, 1), "value": 560},
        {"name": new Date(2020, 7, 2), "value": 560},
        {"name": new Date(2020, 7, 3), "value": 610},
        {"name": new Date(2020, 7, 4), "value": 490},
        {"name": new Date(2020, 7, 5), "value": 510},
        {"name": new Date(2020, 7, 6), "value": 600},
        {"name": new Date(2020, 7, 7), "value": 560},
        {"name": new Date(2020, 7, 8), "value": 480},
        {"name": new Date(2020, 7, 9), "value": 530},
        {"name": new Date(2020, 7, 10), "value": 580},
        {"name": new Date(2020, 7, 11), "value": 610},
        {"name": new Date(2020, 7, 12), "value": 530},
        {"name": new Date(2020, 7, 13), "value": 630},
        {"name": new Date(2020, 7, 14), "value": 650},
        {"name": new Date(2020, 7, 15), "value": 580},
        {"name": new Date(2020, 7, 16), "value": 620}
      ]
    },
    {
      "name": "Site #456",
      "series": [
        {"name": new Date(2020, 6, 16), "value": 650},
        {"name": new Date(2020, 6, 17), "value": 520},
        {"name": new Date(2020, 6, 18), "value": 570},
        {"name": new Date(2020, 6, 19), "value": 440},
        {"name": new Date(2020, 6, 20), "value": 670},
        {"name": new Date(2020, 6, 21), "value": 720},
        {"name": new Date(2020, 6, 22), "value": 530},
        {"name": new Date(2020, 6, 23), "value": 470},
        {"name": new Date(2020, 6, 24), "value": 570},
        {"name": new Date(2020, 6, 25), "value": 510},
        {"name": new Date(2020, 6, 26), "value": 630},
        {"name": new Date(2020, 6, 27), "value": 480},
        {"name": new Date(2020, 6, 28), "value": 610},
        {"name": new Date(2020, 6, 29), "value": 590},
        {"name": new Date(2020, 6, 30), "value": 540},
        {"name": new Date(2020, 6, 31), "value": 710},
        {"name": new Date(2020, 7, 1), "value": 690},
        {"name": new Date(2020, 7, 2), "value": 630},
        {"name": new Date(2020, 7, 3), "value": 540},
        {"name": new Date(2020, 7, 4), "value": 570},
        {"name": new Date(2020, 7, 5), "value": 470},
        {"name": new Date(2020, 7, 6), "value": 610},
        {"name": new Date(2020, 7, 7), "value": 570},
        {"name": new Date(2020, 7, 8), "value": 550},
        {"name": new Date(2020, 7, 9), "value": 590},
        {"name": new Date(2020, 7, 10), "value": 500},
        {"name": new Date(2020, 7, 11), "value": 620},
        {"name": new Date(2020, 7, 12), "value": 430},
        {"name": new Date(2020, 7, 13), "value": 540},
        {"name": new Date(2020, 7, 14), "value": 600},
        {"name": new Date(2020, 7, 15), "value": 590},
        {"name": new Date(2020, 7, 16), "value": 650}
      ]
    },
    {
      "name": "Site #789",
      "series": [
        {"name": new Date(2020, 6, 16), "value": 450},
        {"name": new Date(2020, 6, 17), "value": 500},
        {"name": new Date(2020, 6, 18), "value": 510},
        {"name": new Date(2020, 6, 19), "value": 520},
        {"name": new Date(2020, 6, 20), "value": 510},
        {"name": new Date(2020, 6, 21), "value": 550},
        {"name": new Date(2020, 6, 22), "value": 540},
        {"name": new Date(2020, 6, 23), "value": 480},
        {"name": new Date(2020, 6, 24), "value": 470},
        {"name": new Date(2020, 6, 25), "value": 440},
        {"name": new Date(2020, 6, 26), "value": 480},
        {"name": new Date(2020, 6, 27), "value": 460},
        {"name": new Date(2020, 6, 28), "value": 480},
        {"name": new Date(2020, 6, 29), "value": 480},
        {"name": new Date(2020, 6, 30), "value": 520},
        {"name": new Date(2020, 6, 31), "value": 510},
        {"name": new Date(2020, 7, 1), "value": 550},
        {"name": new Date(2020, 7, 2), "value": 530},
        {"name": new Date(2020, 7, 3), "value": 540},
        {"name": new Date(2020, 7, 4), "value": 540},
        {"name": new Date(2020, 7, 5), "value": 480},
        {"name": new Date(2020, 7, 6), "value": 510},
        {"name": new Date(2020, 7, 7), "value": 500},
        {"name": new Date(2020, 7, 8), "value": 460},
        {"name": new Date(2020, 7, 9), "value": 480},
        {"name": new Date(2020, 7, 10), "value": 430},
        {"name": new Date(2020, 7, 11), "value": 440},
        {"name": new Date(2020, 7, 12), "value": 440},
        {"name": new Date(2020, 7, 13), "value": 480},
        {"name": new Date(2020, 7, 14), "value": 500},
        {"name": new Date(2020, 7, 15), "value": 510},
        {"name": new Date(2020, 7, 16), "value": 500}
      ]
    },
  ];

  clientsData = [
    {
      "name": "Client One",
      "series": [
        {"name": new Date(2020, 6, 16), "value": 620},
        {"name": new Date(2020, 6, 17), "value": 720},
        {"name": new Date(2020, 6, 18), "value": 530},
        {"name": new Date(2020, 6, 19), "value": 540},
        {"name": new Date(2020, 6, 20), "value": 630},
        {"name": new Date(2020, 6, 21), "value": 540},
        {"name": new Date(2020, 6, 22), "value": 610},
        {"name": new Date(2020, 6, 23), "value": 490},
        {"name": new Date(2020, 6, 24), "value": 530},
        {"name": new Date(2020, 6, 25), "value": 520},
        {"name": new Date(2020, 6, 26), "value": 660},
        {"name": new Date(2020, 6, 27), "value": 560},
        {"name": new Date(2020, 6, 28), "value": 610},
        {"name": new Date(2020, 6, 29), "value": 710},
        {"name": new Date(2020, 6, 30), "value": 700},
        {"name": new Date(2020, 6, 31), "value": 630},
        {"name": new Date(2020, 7, 1), "value": 560},
        {"name": new Date(2020, 7, 2), "value": 560},
        {"name": new Date(2020, 7, 3), "value": 610},
        {"name": new Date(2020, 7, 4), "value": 490},
        {"name": new Date(2020, 7, 5), "value": 510},
        {"name": new Date(2020, 7, 6), "value": 600},
        {"name": new Date(2020, 7, 7), "value": 560},
        {"name": new Date(2020, 7, 8), "value": 480},
        {"name": new Date(2020, 7, 9), "value": 530},
        {"name": new Date(2020, 7, 10), "value": 580},
        {"name": new Date(2020, 7, 11), "value": 610},
        {"name": new Date(2020, 7, 12), "value": 530},
        {"name": new Date(2020, 7, 13), "value": 630},
        {"name": new Date(2020, 7, 14), "value": 650},
        {"name": new Date(2020, 7, 15), "value": 580},
        {"name": new Date(2020, 7, 16), "value": 620}
      ]
    },
    {
      "name": "Client Two",
      "series": [
        {"name": new Date(2020, 6, 16), "value": 650},
        {"name": new Date(2020, 6, 17), "value": 520},
        {"name": new Date(2020, 6, 18), "value": 570},
        {"name": new Date(2020, 6, 19), "value": 440},
        {"name": new Date(2020, 6, 20), "value": 670},
        {"name": new Date(2020, 6, 21), "value": 720},
        {"name": new Date(2020, 6, 22), "value": 530},
        {"name": new Date(2020, 6, 23), "value": 470},
        {"name": new Date(2020, 6, 24), "value": 570},
        {"name": new Date(2020, 6, 25), "value": 510},
        {"name": new Date(2020, 6, 26), "value": 630},
        {"name": new Date(2020, 6, 27), "value": 480},
        {"name": new Date(2020, 6, 28), "value": 610},
        {"name": new Date(2020, 6, 29), "value": 590},
        {"name": new Date(2020, 6, 30), "value": 540},
        {"name": new Date(2020, 6, 31), "value": 710},
        {"name": new Date(2020, 7, 1), "value": 690},
        {"name": new Date(2020, 7, 2), "value": 630},
        {"name": new Date(2020, 7, 3), "value": 540},
        {"name": new Date(2020, 7, 4), "value": 570},
        {"name": new Date(2020, 7, 5), "value": 470},
        {"name": new Date(2020, 7, 6), "value": 610},
        {"name": new Date(2020, 7, 7), "value": 570},
        {"name": new Date(2020, 7, 8), "value": 550},
        {"name": new Date(2020, 7, 9), "value": 590},
        {"name": new Date(2020, 7, 10), "value": 500},
        {"name": new Date(2020, 7, 11), "value": 620},
        {"name": new Date(2020, 7, 12), "value": 430},
        {"name": new Date(2020, 7, 13), "value": 540},
        {"name": new Date(2020, 7, 14), "value": 600},
        {"name": new Date(2020, 7, 15), "value": 590},
        {"name": new Date(2020, 7, 16), "value": 650}
      ]
    },
    {
      "name": "Client Three",
      "series": [
        {"name": new Date(2020, 6, 16), "value": 450},
        {"name": new Date(2020, 6, 17), "value": 500},
        {"name": new Date(2020, 6, 18), "value": 510},
        {"name": new Date(2020, 6, 19), "value": 520},
        {"name": new Date(2020, 6, 20), "value": 510},
        {"name": new Date(2020, 6, 21), "value": 550},
        {"name": new Date(2020, 6, 22), "value": 540},
        {"name": new Date(2020, 6, 23), "value": 480},
        {"name": new Date(2020, 6, 24), "value": 470},
        {"name": new Date(2020, 6, 25), "value": 440},
        {"name": new Date(2020, 6, 26), "value": 480},
        {"name": new Date(2020, 6, 27), "value": 460},
        {"name": new Date(2020, 6, 28), "value": 480},
        {"name": new Date(2020, 6, 29), "value": 480},
        {"name": new Date(2020, 6, 30), "value": 520},
        {"name": new Date(2020, 6, 31), "value": 510},
        {"name": new Date(2020, 7, 1), "value": 550},
        {"name": new Date(2020, 7, 2), "value": 530},
        {"name": new Date(2020, 7, 3), "value": 540},
        {"name": new Date(2020, 7, 4), "value": 540},
        {"name": new Date(2020, 7, 5), "value": 480},
        {"name": new Date(2020, 7, 6), "value": 510},
        {"name": new Date(2020, 7, 7), "value": 500},
        {"name": new Date(2020, 7, 8), "value": 460},
        {"name": new Date(2020, 7, 9), "value": 480},
        {"name": new Date(2020, 7, 10), "value": 430},
        {"name": new Date(2020, 7, 11), "value": 440},
        {"name": new Date(2020, 7, 12), "value": 440},
        {"name": new Date(2020, 7, 13), "value": 480},
        {"name": new Date(2020, 7, 14), "value": 500},
        {"name": new Date(2020, 7, 15), "value": 510},
        {"name": new Date(2020, 7, 16), "value": 500}
      ]
    },
  ];

  totalData = [];

  constructor() {
    this.totalData = this.computeTotals(this.costsData);
  }

  hasDate(data: Array<any>, date: Date): any {
    for (const entry of data) {
      if (entry.name.getTime() === date.getTime()) {
        return entry;
      }
    }
    return null;
  }

  computeTotals(data: Array<any>): any {
    const returnData = [];
    data.forEach((obj) => {
      obj.series.forEach((entry) => {
        const curEntry = this.hasDate(returnData, entry.name);
        if (curEntry) {
          curEntry.value += entry.value;
        } else {
          returnData.push(Object.assign({}, entry));
        }
      });
    });

    return [{
      name: 'Total Costs',
      series: returnData
    }];
  }

  getTotalData(): any {
    return this.totalData;
  }

  getCostsData(): any {
    return this.costsData;
  }

  getClientsData(): any {
    return this.clientsData;
  }
}
