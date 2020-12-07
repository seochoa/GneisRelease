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

        public GuardarUsuarioResponse Guardar(User usuario){
            try{
                var UsuarioBuscado = _context.Users.Find(usuario.Username);
                if(UsuarioBuscado !=null){
                    return new GuardarUsuarioResponse ("Error La Persona Ya se encuentra registrada");
                }

                _context.Users.Add(usuario);
                _context.SaveChanges();
                return new GuardarUsuarioResponse (usuario);

            }
            catch(Exception e){
                return new GuardarUsuarioResponse ($"Error de la aplicacion: {e.Message}");
            }
        }

        public List<User> ConsultarTodos(){
            List<User> Usuarios = _context.Users.ToList();
            
            return Usuarios;
        }

        public string Eliminar (string iduser){
            try{
                var UsuarioBuscado = _context.Users.Find(iduser);
                if(UsuarioBuscado !=null){
                    _context.Users.Remove(UsuarioBuscado);
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

        public GuardarUsuarioResponse Modificar (User usuarionuevo){
            try{
                var Usuarioviejo = _context.Users.Find(usuarionuevo.Username);
                if(Usuarioviejo !=null){
                    Usuarioviejo.Username = usuarionuevo.Username;
                    Usuarioviejo.Role = usuarionuevo.Role;
                    Usuarioviejo.Password = usuarionuevo.Password;
                    _context.Users.Update(Usuarioviejo);
                    _context.SaveChanges();
                    return new GuardarUsuarioResponse(Usuarioviejo);
                }
                else{
                    return new GuardarUsuarioResponse ($"La Identificacion no se encuentra en nuestra base de datos");
                }
            }
            catch(Exception e){
                return new GuardarUsuarioResponse ($"Error de la aplicacion: {e.Message}");
            }
        }

    }
    public class GuardarUsuarioResponse
    {
        public GuardarUsuarioResponse(User usuario)
        {
            Error = false;
            Usuario = usuario;
        }
        public GuardarUsuarioResponse(string mensaje)
        {
            Error = true;
            Mensaje = mensaje;
        }
        public bool Error { get; set; }
        public string Mensaje { get; set; }
        public User Usuario { get; set; }
    }
}