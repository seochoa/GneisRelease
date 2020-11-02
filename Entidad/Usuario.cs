using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
namespace Entidad
{
    public class Usuario
    {
        [Key]
        [Column (TypeName = "nvarchar(20)")]
        public string Iduser { get; set; }
        [Column (TypeName = "nvarchar(15)")]
        public string Typeuser  { get; set; }
        [Column (TypeName = "nvarchar(30)")]
        public string Password { get; set; }
    }
}
