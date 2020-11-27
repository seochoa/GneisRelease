using Datos;
using Entidad;
using System;
using System.Collections.Generic;
using System.Linq;
namespace Logica
{
    public class ReservaService
    {
        private readonly ProyectoContext _context;

        public ReservaService(ProyectoContext context){
            _context=context;
        }

        public GuardarReservaResponse Guardar(Reserva reserva){
            try{
                var ReservaBuscada = _context.Reservas.Find(reserva.Idreserva);
                if(ReservaBuscada !=null){
                    return new GuardarReservaResponse ("Error La Reserva Ya se encuentra registrada");
                }

                _context.Reservas.Add(reserva);
                _context.SaveChanges();
                return new GuardarReservaResponse (reserva);

            }
            catch(Exception e){
                return new GuardarReservaResponse ($"Error de la aplicacion: {e.Message}");
            }
        }

        public List<Reserva> ConsultarTodos(){
            List<Reserva> Reservas = _context.Reservas.ToList();
            return Reservas;
        }

        public Reserva BuscarPorID(string idreserva){
            Reserva reserva = _context.Reservas.Find(idreserva);
            return reserva;
        }

        public string Eliminar (string idreserva){
            try{
                var ReservaBuscada = _context.Reservas.Find(idreserva);
                if(ReservaBuscada !=null){
                    _context.Reservas.Remove(ReservaBuscada);
                    _context.SaveChanges();
                    return ($"El registro se ha eliminado sastifactoriamente.");
                }
                else{
                    return ($"La Identificacion no se encuentra en nuestra base de datos");
                }
            }
            catch(Exception e){
                return $"Error de la aplicacion: {e.Message}";
            }
        }
        
    }
    public class GuardarReservaResponse
    {
        public GuardarReservaResponse(Reserva reserva)
        {
            Error = false;
            Reserva = reserva;
        }
        public GuardarReservaResponse(string mensaje)
        {
            Error = true;
            Mensaje = mensaje;
        }
        public bool Error { get; set; }
        public string Mensaje { get; set; }
        public Reserva Reserva { get; set; }
    }
}