using Entidad;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
namespace gneis.Models
{
    public class ClienteInputModel
    {
        public string Cedula { get; set; }
        public string Nombre { get; set; }
        public int Edad { get; set; }
        public string Sexo { get; set; }
        public decimal Telefono {get; set;}
        public string Correo { get; set; }
        public string Direccion { get; set; } 
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
            
        }
        
    }
}