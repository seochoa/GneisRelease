using Entidad;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace gneis.Models
{
    public class UsuarioInputModel
    {
        [Required]
        [StringLength(16,ErrorMessage="No digitar Mas de 16 caracteres")]
        public string Username {get; set;}
        [Required]
        [RegularExpression(@"^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])\S{8,16}$", ErrorMessage ="La contraseña debe tener al entre 8 y 16 caracteres, al menos un dígito, al menos una minúscula y al menos una mayúscula")]
        public string Password {get; set;}
        [Required]
        public string Role {get; set;}
    }

   

    public class UsuarioViewModel : UsuarioInputModel
    {
        public UsuarioViewModel()
        {

        }
        public UsuarioViewModel(User usuario)
        {
            Username = usuario.Username;
            Role = usuario.Role;
            Password = usuario.Password;
            
        }
        
    }
}