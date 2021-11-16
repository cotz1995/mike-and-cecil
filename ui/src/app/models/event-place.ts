import type { Place } from './place'

export class EventPlace {
    name = '';
    date = '';
    time = '';
    place: Place = {} as Place;
}
