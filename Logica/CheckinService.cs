using Datos;
using Entidad;
using System;
using System.Collections.Generic;
using System.Linq;
namespace Logica
{
    public class CheckinService
    {
        private readonly ProyectoContext _context;

        public CheckinService(ProyectoContext context){
            _context=context;
        }

        
        public GuardarCheckinResponse Guardar(Checkin checkin){
            try{
                var checkinbuscado = _context.Checkins.Find(checkin.Idcheckin);
                if(checkinbuscado !=null){
                    return new GuardarCheckinResponse ("La entrada Ya se encuentra registrada");
                }

                _context.Checkins.Add(checkin);
                _context.SaveChanges();
                return new GuardarCheckinResponse (checkin);

            }
            catch(Exception e){
                return new GuardarCheckinResponse ($"Error de la aplicacion: {e.Message}");
            }
        }

        public List<Checkin> ConsultarTodos(){
            List<Checkin> checkins = _context.Checkins.ToList();
            return checkins;
        }

        
        public string Eliminar (string idcheckin){
            try{
                var checkinBuscado = _context.Checkins.Find(idcheckin);
                if(checkinBuscado !=null){
                    _context.Checkins.Remove(checkinBuscado);
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
    public class GuardarCheckinResponse
    {
        public GuardarCheckinResponse(Checkin checkin)
        {
            Error = false;
            Checkin = checkin;
        }
        public GuardarCheckinResponse(string mensaje)
        {
            Error = true;
            Mensaje = mensaje;
        }
        public bool Error { get; set; }
        public string Mensaje { get; set; }
        public Checkin Checkin { get; set; }
    }
    
}