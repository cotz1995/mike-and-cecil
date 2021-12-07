// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import type { Place } from 'src/app/models/place'
import type { ProceedingEvent } from 'src/app/models/proceeding-event'

export const environment = {
  production: false,
  apiUrlRoot: 'http://d25dnnfpjwm841.cloudfront.net/dev-api',
  photosUrlRoot: 'https://mike-and-cecil-photos.s3.amazonaws.com',
  places: new Map<string, Place>([
    ['funeralHome', {
      name: 'Kurtz Memorial Chapel',
      address: '102 E Francis Rd',
      city: 'New Lenox',
      state: 'IL',
      zip: '46268',
      gMapsPlaceId: 'ChIJQ1D4zRtpDogRTPjM-LfSPXg&key=AIzaSyD9wRYEAL78Jkk5pnkCyzXYaWBhQMz9qRY'
    }],
    ['cemetary', {
      name: 'cemetary name',
      address: '456 Fake St',
      city: 'Artificial Town',
      state: 'IN',
      zip: '22222',
      gMapsPlaceId: ''
    }],
    ['afterParty', {
      name: 'party place',
      address: '987 Fake St',
      city: 'Some Other Town',
      state: 'IL',
      zip: '33333',
      gMapsPlaceId: ''
    }]
  ]),
  events: new Map<string, ProceedingEvent>([
    ['visitation', {
      name: 'Visitation',
      date: '11/11/1111',
      time: '2-4PM',
      placeKey: 'funeralHome',
      img: '/assets/images/holyfamily.jpg'
    }],
    ['service', {
      name: 'Service',
      date: '2/2/2222',
      time: '11AM-12PM',
      placeKey: 'funeralHome',
      img: '/assets/images/holyfamily.jpg'
    }],
    ['burial', {
      name: 'Burial',
      date: '4/4/4444',
      time: '12-1PM',
      placeKey: 'cemetary',
      img: '/assets/images/fairfaxmemorial.jpg'
    }],
    ['meal', {
      name: 'Meal, etc.',
      date: '3/3/3333',
      time: '6-8PM',
      placeKey: 'afterParty',
      img: '/assets/images/fairfaxmemorial.jpg'
    }]
  ])
}

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
