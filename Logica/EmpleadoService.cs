using Datos;
using Entidad;
using System;
using System.Collections.Generic;
using System.Linq;
namespace Logica
{
    public class EmpleadoService
    {
        private readonly ProyectoContext _context;

        public EmpleadoService(ProyectoContext context){
            _context=context;
        }
        
        public GuardarEmpleadoResponse Guardar(Empleado empleado){
            try{
                var empleadobuscado = _context.Empleados.Find(empleado.Cedula);
                if(empleadobuscado !=null){
                    return new GuardarEmpleadoResponse ("Error La Persona Ya se encuentra registrada");
                }

                _context.Empleados.Add(empleado);
                _context.SaveChanges();
                return new GuardarEmpleadoResponse (empleado);

            }
            catch(Exception e){
                return new GuardarEmpleadoResponse ($"Error de la aplicacion: {e.Message}");
            }
        }

        public List<Empleado> ConsultarTodos(){
            List<Empleado> empleados = _context.Empleados.ToList();
            return empleados;
        }

        public string Eliminar (string cedula){
            try{
                var empleadobuscado = _context.Empleados.Find(cedula);
                if(empleadobuscado !=null){
                    _context.Empleados.Remove(empleadobuscado);
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

        public GuardarEmpleadoResponse Modificar (Empleado empleadonuevo){
            try{
                var empleadoviejo = _context.Empleados.Find(empleadonuevo.Cedula);
                if(empleadoviejo !=null){

                    empleadoviejo.Cedula = empleadonuevo.Cedula;
                    empleadoviejo.Nombre = empleadonuevo.Nombre;
                    empleadoviejo.Edad = empleadonuevo.Edad;
                    empleadoviejo.Sexo = empleadonuevo.Sexo;
                    empleadoviejo.Telefono = empleadonuevo.Telefono;
                    empleadoviejo.Correo = empleadonuevo.Correo;
                    empleadoviejo.Direccion = empleadonuevo.Direccion;
                    empleadoviejo.Cargo = empleadonuevo.Cargo;
                    empleadonuevo.Horario = empleadonuevo.Horario;
                
                    _context.Empleados.Update(empleadoviejo);
                    _context.SaveChanges();
                    return new GuardarEmpleadoResponse  (empleadoviejo);
                }
                else{
                    return new GuardarEmpleadoResponse  ($"La Identificacion no se encuentra en nuestra base de datos");
                }
            }
            catch(Exception e){
                return new GuardarEmpleadoResponse  ($"Error de la aplicacion: {e.Message}");
            }
        }
    }

    public class GuardarEmpleadoResponse
    {
        public GuardarEmpleadoResponse(Empleado empleado)
        {
            Error = false;
            Empleado = empleado;
        }
        public GuardarEmpleadoResponse(string mensaje)
        {
            Error = true;
            Mensaje = mensaje;
        }
        public bool Error { get; set; }
        public string Mensaje { get; set; }
        public Empleado Empleado { get; set; }
    }
}