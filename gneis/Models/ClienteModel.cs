using Entidad;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
namespace gneis.Models
{
    public class ClienteInputModel
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
        public int Hospedajes { get; set; } 
    }

    public class ClienteViewModel : ClienteInputModel
    {
        public ClienteViewModel()
        {

        }
        public ClienteViewModel(Cliente cliente)
        {
            Cedula = cliente.Cedula;
            Nombre = cliente.Nombre;
            Edad = cliente.Edad;
            Sexo = cliente.Sexo;
            Telefono = cliente.Telefono;
            Correo = cliente.Correo;
            Direccion = cliente.Direccion;
            Hospedajes = cliente.Hospedajes;
            
            
        }
        
    }
}