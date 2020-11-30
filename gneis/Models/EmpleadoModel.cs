using Entidad;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
namespace gneis.Models
{
    public class EmpleadoInputModel
    {
         public string Cedula { get; set; }
        public string Nombre { get; set; }
        public int Edad { get; set; }
        public string Sexo { get; set; }
        public decimal Telefono {get; set;}
        public string Correo { get; set; }
        public string Direccion { get; set; } 
        public string Cargo { get; set; }
        public string Horario { get; set; }
        
    }
    public class EmpleadoViewModel : EmpleadoInputModel
    {
        public EmpleadoViewModel()
        {

        }
        public EmpleadoViewModel(Empleado empleado)
        {
            Cedula = empleado.Cedula;
            Nombre = empleado.Nombre;
            Edad = empleado.Edad;
            Sexo = empleado.Sexo;
            Telefono = empleado.Telefono;
            Correo = empleado.Correo;
            Direccion = empleado.Direccion;
            Cargo = empleado.Cargo;
            Horario = empleado.Horario;
            
            
        }
        
    }
}