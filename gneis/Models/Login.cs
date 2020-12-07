using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text.Json.Serialization;
using System.Threading.Tasks;
using Entidad;

namespace gneis.Models
{
    public class LoginInputModel
    {
        [StringLength(16,ErrorMessage="No digitar Mas de 16 caracteres")]
        public string Username {get; set;}
        [Required]
        public string Password {get; set;}   
    }

    public class LoginViewModel
    {
        public int Id { get; set; }
        public string Username { get; set; }
        public string Password { get; set; }
        public string Role { get; set; }
         public string Token { get; set; }
    }
}