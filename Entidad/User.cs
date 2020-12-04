using System;
using System.ComponentModel.DataAnnotations;
namespace Entidad
{
    public class User
    {
        [Key]
        public string Username {get; set;}
        public string Password {get; set;}
        public string Role {get; set;}
        public string State {get; set;}
        
    }
}