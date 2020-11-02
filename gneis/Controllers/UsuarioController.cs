using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Entidad;
using Logica;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using gneis.Models;
using Datos;

namespace gneis.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsuarioController : ControllerBase
    {
        private readonly UsuarioService _usuarioservice;
        public UsuarioController(ProyectoContext context){
            _usuarioservice = new UsuarioService(context);
        }
        //POST: api/Usuario
        [HttpPost]
        public ActionResult<UsuarioViewModel> post(UsuarioInputModel usuarioInput){
            Usuario usuario = MapearUsuario(usuarioInput);
            var response = _usuarioservice.Guardar(usuario);
            if (response.Error){
                return BadRequest(response.Mensaje);
            }
            return Ok(response.Usuario);
        }
        // GET: api/Usuario
        [HttpGet]
        public IEnumerable<UsuarioViewModel> gets(){
            var usuarios = _usuarioservice.ConsultarTodos().Select(p=>new UsuarioViewModel(p));
            return usuarios;
        }

        // GET: api/Usuario/5
        [HttpGet("{iduser}")]
        public ActionResult<UsuarioViewModel> get(string iduser){
            var usuario = _usuarioservice.BuscarPorID(iduser);
            if(usuario == null)return NotFound();
            var usuarioViewModel = new UsuarioViewModel(usuario);
            return usuarioViewModel;
        }

        // DELETE: api/Usuario/5
        [HttpDelete("{iduser}")]
        public ActionResult<string> Delete(string iduser)
        {
            string mensaje = _usuarioservice.Eliminar(iduser);
            return Ok(mensaje);
        }

        private Usuario MapearUsuario(UsuarioInputModel usuarioInput){
            var Usuario = new Usuario
            {
                Iduser = usuarioInput.Iduser,
                Typeuser = usuarioInput.Typeuser,
                Password = usuarioInput.Password

            };
            return Usuario;
        }
        
    }
}