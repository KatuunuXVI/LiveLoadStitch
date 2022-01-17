import { Injectable } from '@angular/core';
import API from '@aws-amplify/api';

@Injectable({
  providedIn: 'root'
})
export class SitesService {

  sites = [
    {id: 1, name: 'Site #729', center: {lat: 29.728811, lng: -95.432586}},
    {id: 2, name: 'Site #343', center: {lat: 29.744760, lng: -95.364265}},
    {id: 3, name: 'Site #278', center: {lat: 29.679756, lng: -95.382118}}
  ];

  getSites(): any {
    // return this.sites;
    const apiName = 'liveload-api';
    const path = '/sites';
    const myInit = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    return API.get(apiName, path, myInit);
  }

  addSite(site): void {
    if (!site.id) {
      site.id = Math.trunc(Math.random() * 10 + 4);
    }
    this.sites.push(site);
  }

  updateSiteName(siteId, sitename): void {
    for (const site of this.sites) {
      // tslint:disable-next-line:triple-equals
      if (site.id == siteId) {
        site.name = sitename;
        break;
      }
    }
  }

  constructor() { }
}
