import type { Place } from './place'

export class ProceedingEvent {
    name = '';
    date = '';
    time = '';
    place: Place = {} as Place;
}
