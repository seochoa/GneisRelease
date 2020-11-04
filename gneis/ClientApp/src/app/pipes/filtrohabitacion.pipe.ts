import { Pipe, PipeTransform } from '@angular/core';
import { Habitacion } from '../Models/habitacion';

@Pipe({
  name: 'filtrohabitacion'
})
export class FiltrohabitacionPipe implements PipeTransform {

  transform(Habitacion: Habitacion[], searchText: string): any {
    if (searchText == null) return Habitacion;
    return Habitacion.filter(p =>
      p.idhabitacion.toLowerCase()
      .indexOf(searchText.toLowerCase()) !== -1);
    }

}
