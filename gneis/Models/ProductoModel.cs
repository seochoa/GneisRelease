using Entidad;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
namespace gneis.Models
{
    public class ProductoInputModel
    {
        public string Idproducto {get; set;}
        public string Descripcion {get; set;}
        public int Stock {get; set;}
        public decimal Vrunitario {get; set;}
    }

    public class ProductoViewModel : ProductoInputModel
    {
        public ProductoViewModel()
        {

        }
        public ProductoViewModel(Producto producto)
        {
            Idproducto = producto.Idproducto;
            Descripcion = producto.Descripcion;
            Stock = producto.Stock;
            Vrunitario = producto.Vrunitario;
            
        }
        
    }
}