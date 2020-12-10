using Datos;
using Entidad;
using System;
using System.Collections.Generic;
using System.Linq;

namespace Logica
{
    public class HabitacionService
    {
        private readonly ProyectoContext _context;

        public HabitacionService(ProyectoContext context){
            _context=context;
        }

        public GuardarHabitacionResponse Guardar(Habitacion habitacion){
            try{
                var HabitacionBuscada = _context.Habitaciones.Find(habitacion.Idhabitacion);
                if(HabitacionBuscada !=null){
                    return new GuardarHabitacionResponse ("Error La Persona Ya se encuentra registrada");
                }

                _context.Habitaciones.Add(habitacion);
                _context.SaveChanges();
                return new GuardarHabitacionResponse (habitacion);

            }
            catch(Exception e){
                return new GuardarHabitacionResponse ($"Error de la aplicacion: {e.Message}");
            }
        }

        public List<Habitacion> ConsultarTodos(){
            List<Habitacion> Habitaciones = _context.Habitaciones.ToList();
            return Habitaciones;
        }

        public Habitacion BuscarPorID(string idhabitacion){
            Habitacion habitacion = _context.Habitaciones.Find(idhabitacion);
            return habitacion;
        }

        public GuardarHabitacionResponse Eliminar (string idhabitacion){
            try{
                var HabitacionBuscada = _context.Habitaciones.Find(idhabitacion);
                if(HabitacionBuscada !=null){
                    _context.Habitaciones.Remove(HabitacionBuscada);
                    _context.SaveChanges();
                    return new GuardarHabitacionResponse (HabitacionBuscada);
                }
                else{
                    return new GuardarHabitacionResponse ($"La Identificacion no se encuentra en nuestra base de datos");
                }
            }
            catch(Exception e){
                return new GuardarHabitacionResponse ($"Error de la aplicacion: {e.Message}");
            }
        }

        public GuardarHabitacionResponse Modificar (Habitacion habitacionnueva){
            try{
                var habitacionvieja = _context.Habitaciones.Find(habitacionnueva.Idhabitacion);
                if(habitacionvieja !=null){
                    habitacionvieja.Idhabitacion = habitacionnueva.Idhabitacion;
                    habitacionvieja.Tipo = habitacionnueva.Tipo;
                    habitacionvieja.Costo = habitacionnueva.Costo;
                    habitacionvieja.Estado = habitacionnueva.Estado;
                    habitacionvieja.Usos = habitacionnueva.Usos;
                    _context.Habitaciones.Update(habitacionvieja);
                    _context.SaveChanges();
                    return new GuardarHabitacionResponse (habitacionvieja);
                }
                else{
                    return new GuardarHabitacionResponse ($"La Identificacion no se encuentra en nuestra base de datos");
                }
            }
            catch(Exception e){
                return new GuardarHabitacionResponse ($"Error de la aplicacion: {e.Message}") ;
            }
        }
        
    }

    public class GuardarHabitacionResponse
    {
        public GuardarHabitacionResponse(Habitacion habitacion)
        {
            Error = false;
            Habitacion = habitacion;
        }
        public GuardarHabitacionResponse(string mensaje)
        {
            Error = true;
            Mensaje = mensaje;
        }
        public bool Error { get; set; }
        public string Mensaje { get; set; }
        public Habitacion Habitacion { get; set; }
    }
}