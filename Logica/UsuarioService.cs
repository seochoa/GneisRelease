using System.Resources;
using Datos;
using Entidad;
using System;
using System.Collections.Generic;
using System.Linq;


namespace Logica
{
    public class UsuarioService
    {
        private readonly ProyectoContext _context;

        public UsuarioService(ProyectoContext context){
            _context=context;
        }

        public GuardarUsuarioResponse Guardar(Usuario usuario){
            try{
                var UsuarioBuscado = _context.Usuarios.Find(usuario.Iduser);
                if(UsuarioBuscado !=null){
                    return new GuardarUsuarioResponse ("Error La Persona Ya se encuentra registrada");
                }

                _context.Usuarios.Add(usuario);
                _context.SaveChanges();
                return new GuardarUsuarioResponse (usuario);

            }
            catch(Exception e){
                return new GuardarUsuarioResponse ($"Error de la aplicacion: {e.Message}");
            }
        }

        public List<Usuario> ConsultarTodos(){
            List<Usuario> Usuarios = _context.Usuarios.ToList();
            
            return Usuarios;
        }

        public Usuario BuscarPorID(string iduser){
            Usuario usuario = _context.Usuarios.Find(iduser);
            return usuario;
        }

        public string Eliminar (string iduser){
            try{
                var UsuarioBuscado = _context.Usuarios.Find(iduser);
                if(UsuarioBuscado !=null){
                    _context.Usuarios.Remove(UsuarioBuscado);
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

        public string Modificar (Usuario usuarionuevo){
            try{
                var Usuarioviejo = _context.Usuarios.Find(usuarionuevo.Iduser);
                if(Usuarioviejo !=null){
                    Usuarioviejo.Iduser = usuarionuevo.Iduser;
                    Usuarioviejo.Typeuser = usuarionuevo.Typeuser;
                    Usuarioviejo.Password = usuarionuevo.Password;
                    _context.Usuarios.Update(Usuarioviejo);
                    _context.SaveChanges();
                    return ($"El registro se ha Actualizado sastifactoriamente.");
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

    public class GuardarUsuarioResponse
    {
        public GuardarUsuarioResponse(Usuario usuario)
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
        public Usuario Usuario { get; set; }
    }
}
