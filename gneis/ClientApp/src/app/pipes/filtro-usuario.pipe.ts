import { Pipe, PipeTransform } from '@angular/core';
import { Usuario } from '../Models/usuario';

@Pipe({
  name: 'filtroUsuario'
})
export class FiltroUsuarioPipe implements PipeTransform {

  transform(Usuario: Usuario[], searchText: string): any {
    if (searchText == null) return Usuario;
    return Usuario.filter(p =>
      p.iduser.toLowerCase()
      .indexOf(searchText.toLowerCase()) !== -1);
    }
}
