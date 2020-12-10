import { Pipe, PipeTransform } from '@angular/core';
import { Habitacion } from '../Models/habitacion';

@Pipe({
  name: 'filtrohabitacion2'
})
export class Filtrohabitacion2Pipe implements PipeTransform {

  transform(Habitacion: Habitacion[], searchText: string): any {
    if (searchText == null) return Habitacion;
    return Habitacion.filter(p =>
      p.tipo.toLowerCase()
      .indexOf(searchText.toLowerCase()) !== -1 || p.idhabitacion.toLowerCase()
      .indexOf(searchText.toLowerCase()) !== -1);
  }

}
