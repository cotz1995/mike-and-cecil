import type { Place } from 'src/app/models/place'
import type { ProceedingEvent } from 'src/app/models/proceeding-event'

export const environment = {
  production: false,
  apiUrlRoot: '/api',
  places: new Map<string, Place>([
    ['funeralHome', {
      name: 'Miller Funeral Home',
      address: '3200 Golansky Blvd',
      city: 'Woodbridge',
      state: 'VA',
      zip: '22192',
      gMapsPlaceId: 'ChIJvzXPZ2pWtokRGXRaGD69dFY'
    }],
    ['cemetery', {
      name: 'Fairfax Memorial Park',
      address: '9900 Braddock Rd',
      city: 'Fairfax',
      state: 'VA',
      zip: '22032',
      gMapsPlaceId: 'ChIJFymcQNVNtokR-UFpRVZBYRk'
    }],
    ['church', {
      name: 'Holy Family Catholic Church',
      address: '14160 Ferndale Rd',
      city: 'Woodbridge',
      state: 'VA',
      zip: '22193',
      gMapsPlaceId: 'ChIJ6UU6bjdWtokR43Ib9Zz4I5A'
    }]
  ]),
  events: new Map<string, ProceedingEvent>([
    ['visitation', {
      name: 'Visitation',
      date: 'Dec. 21, 2021',
      time: '6:00PM - 9:00PM',
      placeKey: 'funeralHome',
      img: '/assets/images/crucifix.jpg'
    }],
    ['service', {
      name: 'Funeral Liturgy',
      date: 'Dec. 22, 2021',
      time: '10:00AM',
      placeKey: 'church',
      img: '/assets/images/crucifix.jpg'
    }],
    ['burial', {
      name: 'Burial Service',
      date: 'Dec. 22, 2021',
      time: '12:00PM',
      placeKey: 'cemetery',
      img: '/assets/images/crucifix.jpg'
    }],
    ['meal', {
      name: 'Reception',
      date: 'Dec. 22, 2021',
      time: '1:00PM',
      placeKey: 'church',
      img: '/assets/images/crucifix.jpg'
    }]
  ])
}
