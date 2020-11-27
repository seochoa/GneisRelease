using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
namespace Entidad
{
    public class Reserva
    {
        [Key]
        [Column (TypeName = "nvarchar(20)")]
        public string Idreserva { get; set; }
        [Column (TypeName = "nvarchar(20)")]
        public string Idhabitacion { get; set; }
        [Column (TypeName = "nvarchar(20)")]
        public string Idcliente { get; set; }
        public int Numeroinvitados {get; set;}
        public DateTime Fechareserva {get; set;}
    
        
    }
}