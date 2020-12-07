import { Pipe, PipeTransform } from '@angular/core';
import { Usuario } from '../Models/usuario';
import { User } from '../seguridad/user';

@Pipe({
  name: 'filtroUsuario'
})
export class FiltroUsuarioPipe implements PipeTransform {

  transform(Usuario: User[], searchText: string): any {
    if (searchText == null) return Usuario;
    return Usuario.filter(p =>
      p.username.toLowerCase()
      .indexOf(searchText.toLowerCase()) !== -1);
    }
}
