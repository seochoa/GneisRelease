using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
namespace Entidad
{
    public class Habitacion
    {
        [Key]
        [Column (TypeName = "nvarchar(20)")]
        public string Idhabitacion {get; set;}
        [Column (TypeName = "nvarchar(15)")]
        public string Tipo {get; set;}
        [Column (TypeName = "decimal(15,2)")]
        public decimal Costo {get; set;}
        [Column (TypeName = "nvarchar(20)")]
        public string Estado {get; set;}
        public int Usos {get; set;}
        
    }
}