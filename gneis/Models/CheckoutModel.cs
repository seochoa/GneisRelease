using Entidad;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace gneis.Models
{
    public class CheckoutInputModel
    {
        [Required]
        [MinLength(2,ErrorMessage="el campo debe tener minimo 2 caracteres")]
        [StringLength(20,ErrorMessage="No digitar Mas de 20 caracteres")]
        public string Idcheckout{ get; set; }
        [Required]
        [MinLength(2,ErrorMessage="el campo debe tener minimo 2 caracteres")]
        [StringLength(16,ErrorMessage="No digitar Mas de 16 caracteres")]
        public string Idhabitacion { get; set; }
        [Required]
        [MinLength(10,ErrorMessage="el campo debe tener minimo 10 caracteres")]
        [StringLength(16,ErrorMessage="No digitar Mas de 16 caracteres")]
        public string Idcliente { get; set; }
        [Required]
        [Range(0,4,ErrorMessage="El numero de acompañantes debe estar en el rango de 0 a 4")]
        public int Numeroinvitados {get; set;}
        [Required]
        public DateTime Fechaentrada {get; set;}
        [Required]
        public DateTime Fechasalida {get; set;}
        [Required]
        public int DiasHospedaje {get; set;}
        [Required]
        public decimal TotalHospedaje {get; set;}
    }
    
    public class CheckoutViewModel : CheckoutInputModel
    {
        public CheckoutViewModel()
        {

        }
        public CheckoutViewModel(Checkout checkout)
        {
            Idcheckout = checkout.Idcheckout;
            Idhabitacion = checkout.Idhabitacion;
            Idcliente = checkout.Idcliente;
            Numeroinvitados = checkout.Numeroinvitados;
            Fechaentrada = checkout.Fechaentrada;
            Fechasalida = checkout.Fechasalida;
            DiasHospedaje = checkout.DiasHospedaje;
            TotalHospedaje = checkout.TotalHospedaje;
        }
        
    }
}