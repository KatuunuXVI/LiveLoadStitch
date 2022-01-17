import { Injectable } from '@angular/core';
import { Auth } from 'aws-amplify';
import API from '@aws-amplify/api';



@Injectable({
  providedIn: 'root'
})

export class PcdimageService{

    getPcdimage(): any{
    const apiName = 'liveload-api';
    const path = '/pcdData';
    const myInit = {
      headers: {
        'Access-Control-Allow-Origin' : '*',
        'Content-Type': 'application/octet-stream'
        // 'Access-Control-Allow-Credentials' : true,
      },
    };
    return API.get(apiName, path, myInit);
    }

}