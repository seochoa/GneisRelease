using Entidad;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
namespace gneis.Models
{
    public class ReservaInputModel
    {
        public string Idreserva { get; set; }
        public string Idhabitacion { get; set; }
        public string Idcliente { get; set; }
        public int Numeroinvitados {get; set;}
        public DateTime Fechareserva {get; set;}
    }

    public class ReservaViewModel : ReservaInputModel
    {
        public ReservaViewModel()
        {

        }
        public ReservaViewModel(Reserva reserva)
        {
            Idreserva = reserva.Idreserva;
            Idhabitacion = reserva.Idhabitacion;
            Idcliente = reserva.Idcliente;
            Numeroinvitados = reserva.Numeroinvitados;
            Fechareserva = reserva.Fechareserva;
            
        }
        
    }
}