using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
namespace Entidad
{
    public class Checkout
    {
        
        [Key]
        [Column (TypeName = "nvarchar(20)")]
        public string Idcheckout{ get; set; }
        [Column (TypeName = "nvarchar(20)")]
        public string Idhabitacion { get; set; }
        [Column (TypeName = "nvarchar(20)")]
        public string Idcliente { get; set; }
        public int Numeroinvitados {get; set;}
        public DateTime Fechaentrada {get; set;}
        public DateTime Fechasalida {get; set;}
        public int DiasHospedaje {get; set;}
        [Column (TypeName = "decimal(15,2)")]
        public decimal TotalHospedaje {get; set;}


    }
}