using Entidad;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
namespace gneis.Models
{
    public class HabitacionInputModel
    {
        public string Idhabitacion {get; set;}
        public string Tipo {get; set;}
        public decimal Costo {get; set;}
        public string Estado {get; set;}
        public int Usos {get; set;}
    }

    public class HabitacionViewModel : HabitacionInputModel
    {
        public HabitacionViewModel()
        {

        }
        public HabitacionViewModel(Habitacion habitacion)
        {
            Idhabitacion = habitacion.Idhabitacion;
            Tipo = habitacion.Tipo;
            Costo = habitacion.Costo;
            Estado = habitacion.Estado;
            Usos = habitacion.Usos;
            
        }
        
    }
}