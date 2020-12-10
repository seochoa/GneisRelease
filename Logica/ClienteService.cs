using Datos;
using Entidad;
using System;
using System.Collections.Generic;
using System.Linq;
namespace Logica
{
    public class ClienteService
    {
        private readonly ProyectoContext _context;

        public ClienteService(ProyectoContext context){
            _context=context;
        }

        public GuardarClienteResponse Guardar(Cliente cliente){
            try{
                var Clinetebuscado = _context.Clientes.Find(cliente.Cedula);
                if(Clinetebuscado !=null){
                    return new GuardarClienteResponse ("El cliente Ya se encuentra registrado");
                }

                _context.Clientes.Add(cliente);
                _context.SaveChanges();
                return new GuardarClienteResponse (cliente);

            }
            catch(Exception e){
                return new GuardarClienteResponse ($"Error de la aplicacion: {e.Message}");
            }
        }

        public List<Cliente> ConsultarTodos(){
            List<Cliente> clientes = _context.Clientes.ToList();
            return clientes;
        }

        public Cliente BuscarPorID(string cedula){
            Cliente cliente = _context.Clientes.Find(cedula);
            return cliente;
        }

        public string Eliminar (string cedula){
            try{
                var ClienteBuscado = _context.Clientes.Find(cedula);
                if(ClienteBuscado !=null){
                    _context.Clientes.Remove(ClienteBuscado);
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

        public GuardarClienteResponse Modificar (Cliente clientenuevo){
            try{
                var clienteviejo = _context.Clientes.Find(clientenuevo.Cedula);
                if(clienteviejo !=null){

                    clienteviejo.Cedula = clientenuevo.Cedula;
                    clienteviejo.Nombre = clientenuevo.Nombre;
                    clienteviejo.Edad = clientenuevo.Edad;
                    clienteviejo.Sexo = clientenuevo.Sexo;
                    clienteviejo.Telefono = clientenuevo.Telefono;
                    clienteviejo.Correo = clientenuevo.Correo;
                    clienteviejo.Direccion = clientenuevo.Direccion;
                    clienteviejo.Hospedajes = clientenuevo.Hospedajes;
                
                
                    _context.Clientes.Update(clienteviejo);
                    _context.SaveChanges();
                    return new GuardarClienteResponse (clienteviejo);
                }
                else{
                    return new GuardarClienteResponse ($"La Identificacion no se encuentra en nuestra base de datos");
                }
            }
            catch(Exception e){
                return new GuardarClienteResponse($"Error de la aplicacion: {e.Message}");
            }
        }
        
    }
    public class GuardarClienteResponse
    {
        public GuardarClienteResponse(Cliente cliente)
        {
            Error = false;
            Cliente = cliente;
        }
        public GuardarClienteResponse(string mensaje)
        {
            Error = true;
            Mensaje = mensaje;
        }
        public bool Error { get; set; }
        public string Mensaje { get; set; }
        public Cliente Cliente { get; set; }
    }
}