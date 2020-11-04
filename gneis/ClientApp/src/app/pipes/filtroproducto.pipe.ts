import { Pipe, PipeTransform } from '@angular/core';
import { Producto } from '../Models/producto';

@Pipe({
  name: 'filtroproducto'
})
export class FiltroproductoPipe implements PipeTransform {

  transform(Producto: Producto[], searchText: string): any {
    if (searchText == null) return Producto;
    return Producto.filter(p =>
      p.idproducto.toLowerCase()
      .indexOf(searchText.toLowerCase()) !== -1);
    }

}
