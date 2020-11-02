using Entidad;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace gneis.Models
{
    public class UsuarioInputModel
    {
        public string Iduser { get; set; }
        public string Typeuser  { get; set; }
        public string Password { get; set; }
    }

    public class UsuarioViewModel : UsuarioInputModel
    {
        public UsuarioViewModel()
        {

        }
        public UsuarioViewModel(Usuario usuario)
        {
            Iduser = usuario.Iduser;
            Typeuser = usuario.Typeuser;
            Password = usuario.Password;
            
        }
        
    }
}