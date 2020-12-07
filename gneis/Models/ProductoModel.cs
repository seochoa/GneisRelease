using Entidad;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
namespace gneis.Models
{
    public class ProductoInputModel
    {
        [Required]
        [MinLength(2,ErrorMessage="el campo debe tener minimo 2 caracteres")]
        [StringLength(10,ErrorMessage="No digitar Mas de 10 caracteres")]
        public string Idproducto {get; set;}
        [Required]
        [MinLength(5,ErrorMessage="el campo debe tener minimo 5 caracteres")]
        [StringLength(30,ErrorMessage="No digitar Mas de 30 caracteres en el campo")]
        public string Descripcion {get; set;}
        [Required]
        [Range(1,10000,ErrorMessage="el stock debe estar en el rango de 1 a 10000 unidades del producto")]
        public int Stock {get; set;}
        [Required]
        [Range(typeof(Decimal), "100", "999999", ErrorMessage = "Digite el costo entre el rango de 100 y 999999")]
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