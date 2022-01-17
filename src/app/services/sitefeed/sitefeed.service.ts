import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SitefeedService {

  updateFeed = [
    {sitename: 'Site #729', feed: [
        {datePosted: new Date(), type: 'move', unitName: 'Unit 179A', moveData: [{lat: 29.7321402, lng: -95.3966219}, {lat: 29.729811, lng: -95.432586}]},
        {datePosted: new Date(), type: 'loads', unitName: 'Unit 225E', numLoads: 21},
        {datePosted: new Date(), type: 'battery', batteryData: [{unitName: 'Unit 634F', percent: 16}]}
      ]},
    {sitename: 'Site #343', feed: [
        {datePosted: new Date(), type: 'battery', batteryData: [{unitName: 'Unit 651B', percent: 3}, {unitName: 'Unit 299D', percent: 7}, {unitName: 'Unit 198F', percent: 9}]},
        {datePosted: new Date(), type: 'loads', unitName: 'Unit 815C', numLoads: 11},
        {datePosted: new Date(), type: 'move', unitName: 'Unit 658D', moveData: [{lat: 29.7321402, lng: -95.3966219}, {lat: 29.729811, lng: -95.432586}]},
      ]},
    {sitename: 'Site #278', feed: [
        {datePosted: new Date(), type: 'loads', unitName: 'Unit 566F', numLoads: 38},
        {datePosted: new Date(), type: 'loads', unitName: 'Unit 965F', numLoads: 26},
        {datePosted: new Date(), type: 'move', unitName: 'Unit 923B', moveData: [{lat: 29.7321402, lng: -95.3966219}, {lat: 29.729811, lng: -95.432586}]},
        {datePosted: new Date(), type: 'battery', batteryData: [{unitName: 'Unit 965F', percent: 12}, {unitName: 'Unit 879F', percent: 11}]},
        {datePosted: new Date(), type: 'move', unitName: 'Unit 116E', moveData: [{lat: 29.7321402, lng: -95.3966219}, {lat: 29.729811, lng: -95.432586}]}
      ]}
  ];

  getSiteFeed(sitename): any {
    const siteFeed = this.updateFeed.reduce((acc: any, d: any) => {
      if (sitename == null || sitename === d.sitename) {
        return acc.concat(d.feed);
      }
      return acc;
    }, []);
    // TODO: sort by date posted

    return siteFeed;
  }

  constructor() { }
}
