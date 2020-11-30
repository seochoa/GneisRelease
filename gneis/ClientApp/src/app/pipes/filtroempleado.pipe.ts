import { Pipe, PipeTransform } from '@angular/core';
import { Empleado } from '../Models/empleado';

@Pipe({
  name: 'filtroempleado'
})
export class FiltroempleadoPipe implements PipeTransform {

  transform(Empleado: Empleado[], searchText: string): any {
    if (searchText == null) return Empleado;
    return Empleado.filter(p =>
      p.cedula.toLowerCase()
      .indexOf(searchText.toLowerCase()) !== -1 || 
      p.cargo.indexOf(searchText) !== -1 );
    }

}
