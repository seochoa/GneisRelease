using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
namespace Entidad
{
    public class Producto
    {
        [Key]
        [Column (TypeName = "nvarchar(20)")]
        public string Idproducto {get; set;}
        [Column (TypeName = "nvarchar(40)")]
        public string Descripcion {get; set;}
        public int Stock {get; set;}
        [Column (TypeName = "decimal(15,2)")]
        public decimal Vrunitario {get; set;}
        
        
    }
}