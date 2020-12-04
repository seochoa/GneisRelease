using Datos;
using Entidad;
using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.EntityFrameworkCore;
namespace Logica
{
    public class UserService
    {
        private readonly ProyectoContext _context;
        public UserService(ProyectoContext context){
            _context=context;
        }
        public User Validate(string userName, string password) 
        {
            return _context.Users.FirstOrDefault(t => t.Username == userName && t.Password == password);
        }

    }
}