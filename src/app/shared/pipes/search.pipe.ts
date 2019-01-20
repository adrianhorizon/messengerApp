import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {
  // value arreglo y args es la palabra de busqueda
  transform(value: any, args?: any): any {
    if (!value) {
      return;
    }
    if(!args) {
      // sino se ha buscado nada nos va a mostrar la lista de amigos toda
      return value;
    }
    args = args.toLowerCase();
    return value.filter( (item) => {
      // include toma el string y checkear si incluye la palabra que le pasabamos
      return JSON.stringify(item).toLowerCase().includes(args);
    });
  }

}
