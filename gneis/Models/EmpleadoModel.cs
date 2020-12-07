using Entidad;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
namespace gneis.Models
{
    public class EmpleadoInputModel
    {
        [Required]
        [MinLength(10,ErrorMessage="el campo debe tener minimo 10 caracteres")]
        [StringLength(16,ErrorMessage="No digitar Mas de 16 caracteres")]
        public string Cedula { get; set; }
        [Required]
        [MinLength(10,ErrorMessage="el campo debe tener minimo 10 caracteres")]
        [StringLength(30,ErrorMessage="No digitar Mas de 30 caracteres en el campo")]
        public string Nombre { get; set; }
        [Required]
        [Range(18,60,ErrorMessage="La edad debe estar en el rango de 18 a 60 años")]
        public int Edad { get; set; }
        [Required]
        public string Sexo { get; set; }
        [Required]
        [RegularExpression(@"^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$", ErrorMessage = "Formato del telefono es invalido")]
        public decimal Telefono {get; set;}
        [Required]
        [RegularExpression( "^[a-z0-9_\\+-]+(\\.[a-z0-9_\\+-]+)*@[a-z0-9-]+(\\.[a-z0-9]+)*\\.([a-z]{2,4})$" , ErrorMessage = "Formato del correo es invalido" )] 
        public string Correo { get; set; }
        [Required]
        [MinLength(10,ErrorMessage="el campo debe tener minimo 10 caracteres")]
        [StringLength(25,ErrorMessage="No digitar Mas de 25 caracteres")]
        public string Direccion { get; set; } 
        [Required]
        public string Cargo { get; set; }
        [Required]
        [MinLength(10,ErrorMessage="el campo debe tener minimo 10 caracteres")]
        [StringLength(25,ErrorMessage="No digitar Mas de 25 caracteres")]
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