using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
namespace Entidad
{
    public class Empleado
    {
        [Key]
        [Column (TypeName = "nvarchar(20)")]
        public string Cedula { get; set; }
        [Column (TypeName = "nvarchar(50)")]
        public string Nombre { get; set; }
        public int Edad { get; set; }
        [Column (TypeName = "nvarchar(10)")]
        public string Sexo { get; set; }
        [Column (TypeName = "decimal(15,2)")]
        public decimal Telefono {get; set;}
        [Column (TypeName = "nvarchar(30)")]
        public string Correo { get; set; }
        [Column (TypeName = "nvarchar(30)")]
        public string Direccion { get; set; }
        [Column (TypeName = "nvarchar(20)")]
        public string Cargo { get; set; }
        [Column (TypeName = "nvarchar(30)")]
        public string Horario { get; set; }
        
    }
}