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
        public DbSet<Producto> Productos {get;set;}
        public DbSet<Habitacion> Habitaciones {get;set;}
        public DbSet<Cliente> Clientes {get;set;}
        public DbSet<Reserva> Reservas {get;set;}
        public DbSet<Empleado> Empleados {get;set;}
        public DbSet<User> Users {get;set;}
        public DbSet<Checkin> Checkins {get;set;}
        public DbSet<Checkout> Checkouts {get;set;}
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Reserva>()
            .HasOne<Habitacion>()
            .WithMany()
            .HasForeignKey(p => p.Idhabitacion);

            modelBuilder.Entity<Reserva>()
            .HasOne<Cliente>()
            .WithMany()
            .HasForeignKey(p => p.Idcliente);

            modelBuilder.Entity<Checkin>()
            .HasOne<Habitacion>()
            .WithMany()
            .HasForeignKey(p => p.Idhabitacion);

            modelBuilder.Entity<Checkin>()
            .HasOne<Cliente>()
            .WithMany()
            .HasForeignKey(p => p.Idcliente);

            modelBuilder.Entity<Checkout>()
            .HasOne<Habitacion>()
            .WithMany()
            .HasForeignKey(p => p.Idhabitacion);

            modelBuilder.Entity<Checkout>()
            .HasOne<Cliente>()
            .WithMany()
            .HasForeignKey(p => p.Idcliente);
        }
    }
}
