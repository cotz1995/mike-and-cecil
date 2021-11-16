import type { Place } from 'src/app/models/place'

export const environment = {
  production: false,
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
