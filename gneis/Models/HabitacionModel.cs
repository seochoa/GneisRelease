using Entidad;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
namespace gneis.Models
{
    public class HabitacionInputModel
    {
        [Required]
        [MinLength(2,ErrorMessage="el campo debe tener minimo 2 caracteres")]
        [StringLength(16,ErrorMessage="No digitar Mas de 16 caracteres")]
        public string Idhabitacion {get; set;}
        [Required]
        public string Tipo {get; set;}
        [Required]
        [Range(typeof(Decimal), "100", "99999999", ErrorMessage = "Digite el costo entre el rango de 100 y 99999999")]
        public decimal Costo {get; set;}
        [Required]
        public string Estado {get; set;}
        [Required]
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