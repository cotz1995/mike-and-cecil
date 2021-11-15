// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import type { Place } from 'src/app/models/place'

export const environment = {
  production: false,
  places: new Map<string, Place>([
    ['funeralHome', {
      name: 'funeralHomeName',
      address: '123 Fake St',
      city: 'Fake Town',
      state: 'VA',
      zip: '11111'
    }],
    ['cemetary', {
      name: 'cemetary name',
      address: '456 Fake St',
      city: 'Artificial Town',
      state: 'IN',
      zip: '22222'
    }],
    ['afterParty', {
      name: 'party place',
      address: '987 Fake St',
      city: 'Some Other Town',
      state: 'IL',
      zip: '33333'
    }]
  ]),
  events: [
    {
      name: 'Visitation',
      date: '11/11/1111',
      time: '2-4PM',
      placeKey: 'funeralHome'
    },
    {
      name: 'Service',
      date: '2/2/2222',
      time: '11AM-12PM',
      placeKey: 'funeralHome'
    },
    {
      name: 'Burial',
      date: '4/4/4444',
      time: '12-1PM',
      placeKey: 'cemetary'
    },
    {
      name: 'Meal, etc.',
      date: '3/3/3333',
      time: '6-8PM',
      placeKey: 'afterParty'
    }
  ]
}

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
