import { Injectable } from '@angular/core'
import type { Observable } from 'rxjs'
import { of } from 'rxjs'
import type { Message } from '../models/message'

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  getMessages (): Observable<Message[]> {
    return of([
      { id: '1', message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
      { id: '2', message: 'Morbi semper lectus ullamcorper tortor malesuada, eu dictum diam iaculis.' },
      { id: '3', message: 'Aenean sollicitudin tellus non semper vestibulum.' },
      { id: '4', message: 'Duis placerat turpis vitae leo imperdiet porttitor.' },
      { id: '5', message: 'Proin posuere felis eget nunc vulputate, nec pretium lectus posuere.' },
      { id: '6', message: 'Quisque ac metus aliquet, egestas dolor at, tincidunt risus.' },
      { id: '7', message: 'Fusce vitae ante vel quam luctus tincidunt.' },
      { id: '8', message: 'Quisque nec nisl tempus, maximus nisi pharetra, elementum erat.' },
      { id: '9', message: 'Integer vehicula massa ac faucibus blandit.' },
      { id: '10', message: 'Proin posuere felis eget nunc vulputate, nec pretium lectus posuereQuisque nec nisl tempus, maximus nisi pharetra, elementum eratInteger vehicula massa ac faucibus blandit.Vestibulum et enim eget eros scelerisque interdum facilisis quis ex.Proin posuere felis eget nunc vulputate, nec pretium lectus posuereQuisque nec nisl tempus, maximus nisi pharetra, elementum eratInteger vehicula massa ac faucibus blandit.Vestibulum et enim eget eros scelerisque interdum facilisis quis ex.Proin posuere felis eget nunc vulputate, nec pretium lectus posuereQuisque nec nisl tempus, maximus nisi pharetra, elementum eratInteger vehicula massa ac faucibus blandit.Vestibulum et enim eget eros scelerisque interdum facilisis quis ex.Proin posuere felis eget nunc vulputate, nec pretium lectus posuereQuisque nec nisl tempus, maximus nisi pharetra, elementum eratInteger vehicula massa ac faucibus blandit.Vestibulum et enim eget eros scelerisque interdum facilisis quis ex.Vestibulum et enim eget eros scelerisque interdum facilisis quis ex.Vestibulum et enim eget eros scelerisque interdum facilisis quis ex.Vestibulum et enim eget eros scelerisque interdum facilisis quis ex.Vestibulum et enim eget eros scelerisque interdum facilisis quis ex.Vestibulum et enim eget eros scelerisque interdum facilisis quis ex.Vestibulum et enim eget eros scelerisque interdum' },
      { id: '11', message: 'Morbi auctor tortor sit amet elit vehicula scelerisque.' },
      { id: '12', message: 'Morbi eget tortor ac enim luctus faucibus vitae et massa.' },
      { id: '13', message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis placerat turpis vitae leo imperdiet porttitor. Proin posuere felis eget nunc vulputate, nec pretium lectus posuere. Fusce vitae ante vel quam luctus tincidunt. Vestibulum et enim eget eros scelerisque interdum facilisis quis ex. Nullam iaculis quam at convallis laoreet. Nullam iaculis quam at convallis laoreet.' },
      { id: '14', message: 'Cras ut lorem sed massa lobortis convallis in id arcu.\nPellentesque sed tortor vitae nisl bibendum viverra.' },
      { id: '15', message: 'Maecenas varius augue et nisi hendrerit, at luctus lectus hendrerit.\nAenean at ligula quis sem eleifend scelerisque.' },
      { id: '16', message: 'Sed quis erat suscipit, fermentum nunc id, venenatis ex.\nQuisque convallis felis id ultricies eleifend.' },
      { id: '17', message: 'Pellentesque dignissim quam ac sapien porttitor, a rutrum tortor maximus.\nUt blandit dolor ac sollicitudin feugiat.' },
      { id: '18', message: 'Maecenas quis nulla quis ipsum fermentum volutpat quis at ipsum.\nCras dignissim lectus ut mollis tempus.' },
      { id: '19', message: 'Integer vehicula massa ac faucibus blandit.' },
      { id: '20', message: 'Proin posuere felis eget nunc vulputate, nec pretium lectus posuereQuisque nec nisl tempus, maximus nisi pharetra, elementum eratInteger vehicula massa ac faucibus blandit.Vestibulum et enim eget eros scelerisque interdum facilisis quis ex.Proin posuere felis eget nunc vulputate, nec pretium lectus posuereQuisque nec nisl tempus, maximus nisi pharetra, elementum eratInteger vehicula massa ac faucibus blandit.Vestibulum et enim eget eros scelerisque interdum facilisis quis ex.Proin posuere felis eget nunc vulputate, nec pretium lectus posuereQuisque nec nisl tempus, maximus nisi pharetra, elementum eratInteger vehicula massa ac faucibus blandit.Vestibulum et enim eget eros scelerisque interdum facilisis quis ex.Proin posuere felis eget nunc vulputate, nec pretium lectus posuereQuisque nec nisl tempus, maximus nisi pharetra, elementum eratInteger vehicula massa ac faucibus blandit.Vestibulum et enim eget eros scelerisque interdum facilisis quis ex.' },
      { id: '21', message: 'Morbi auctor tortor sit amet elit vehicula scelerisque.' },
      { id: '22', message: 'Morbi eget tortor ac enim luctus faucibus vitae et massa.' },
      { id: '23', message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis placerat turpis vitae leo imperdiet porttitor. Proin posuere felis eget nunc vulputate, nec pretium lectus posuere. Fusce vitae ante vel quam luctus tincidunt. Vestibulum et enim eget eros scelerisque interdum facilisis quis ex. Nullam iaculis quam at convallis laoreet. Nullam iaculis quam at convallis laoreet.' },
      { id: '24', message: 'Cras ut lorem sed massa lobortis convallis in id arcu.\nPellentesque sed tortor vitae nisl bibendum viverra.' },
      { id: '25', message: 'Maecenas varius augue et nisi hendrerit, at luctus lectus hendrerit.\nAenean at ligula quis sem eleifend scelerisque.' },
      { id: '26', message: 'Sed quis erat suscipit, fermentum nunc id, venenatis ex.\nQuisque convallis felis id ultricies eleifend.' },
      { id: '27', message: 'Pellentesque dignissim quam ac sapien porttitor, a rutrum tortor maximus.\nUt blandit dolor ac sollicitudin feugiat.' },
      { id: '28', message: 'Maecenas quis nulla quis ipsum fermentum volutpat quis at ipsum.\nCras dignissim lectus ut mollis tempus.' }
    ])
  }
}
