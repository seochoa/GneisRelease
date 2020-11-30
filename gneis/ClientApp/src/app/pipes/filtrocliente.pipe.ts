import { Pipe, PipeTransform } from '@angular/core';
import { Cliente } from '../Models/cliente';

@Pipe({
  name: 'filtrocliente'
})
export class FiltroclientePipe implements PipeTransform {

  transform(Cliente: Cliente[], searchText: string): any {
    if (searchText == null) return Cliente;
    return Cliente.filter(p =>
      p.cedula.toLowerCase()
      .indexOf(searchText.toLowerCase()) !== -1);
    }

}
