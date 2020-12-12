using Entidad;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
namespace gneis.Models
{
    public class CheckinInputModel
    {
        [Required]
        [MinLength(2,ErrorMessage="el campo debe tener minimo 2 caracteres")]
        [StringLength(20,ErrorMessage="No digitar Mas de 20 caracteres")]
        public string Idcheckin{ get; set; }
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
        
    }
    public class CheckinViewModel : CheckinInputModel
    {
        public CheckinViewModel()
        {

        }
        public CheckinViewModel(Checkin checkin)
        {
            Idcheckin = checkin.Idcheckin;
            Idhabitacion = checkin.Idhabitacion;
            Idcliente = checkin.Idcliente;
            Numeroinvitados = checkin.Numeroinvitados;
            Fechaentrada = checkin.Fechaentrada;
        }
        
    }
}