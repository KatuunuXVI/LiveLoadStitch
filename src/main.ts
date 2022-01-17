import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import Amplify, { Auth } from 'aws-amplify';
import awsconfig from './aws-exports';



Amplify.configure({
  // OPTIONAL - if your API requires authentication
  Auth: {
    // REQUIRED - Amazon Cognito Identity Pool ID
    identityPoolId: 'us-east-2:df1dbc4f-6837-4abe-81a9-d7be8f3af101',
    // REQUIRED - Amazon Cognito Region
    region: 'us-east-2',
    // OPTIONAL - Amazon Cognito User Pool ID
    userPoolId: 'us-east-2_tjKkFq6Va',
    // OPTIONAL - Amazon Cognito Web Client ID (26-char alphanumeric string)
    userPoolWebClientId: '62gvb3uqa3o03d57v2jpa2lb0e',
  },
  API: {
    endpoints: [
      {
        name: 'liveload-api',
        endpoint: 'https://3dc3v0dif6.execute-api.us-east-2.amazonaws.com/demo',
        custom_header: async () => {
          return { Authorization : localStorage.getItem('token') };
        }
      }
    ]
  }
});

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
    .catch(err => console.error(err));
