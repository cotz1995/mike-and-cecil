import { Place } from './place'

export class ProceedingEvent {
    name: string = '';
    date: string = '';
    time: string = '';
    place: Place = {} as Place;
}
