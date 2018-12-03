import {AuthServiceConfig, FacebookLoginProvider} from 'angular5-social-login';


export function getAuthServiceConfigs() {
  return new AuthServiceConfig([
    {
      id: FacebookLoginProvider.PROVIDER_ID,
      provider: new FacebookLoginProvider('354810275327159')
    }
  ]);
}
