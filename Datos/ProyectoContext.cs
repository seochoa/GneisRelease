using System;
using Microsoft.EntityFrameworkCore;
using Entidad;

namespace Datos
{
    public class ProyectoContext : DbContext
    {
        public ProyectoContext(DbContextOptions options): base(options){
        }

        public DbSet<Usuario> Usuarios{get;set;}
    }
}
