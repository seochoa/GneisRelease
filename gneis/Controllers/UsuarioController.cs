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
using Microsoft.AspNetCore.Authorization;
namespace gneis.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class UsuarioController : ControllerBase
    {
        private readonly UserService _usuarioservice;
        public UsuarioController(ProyectoContext context){
            _usuarioservice = new UserService(context);
        }
        //POST: api/Usuario
        [AllowAnonymous]
        [HttpPost]
        public ActionResult<UsuarioViewModel> post(UsuarioInputModel usuarioInput){
            User usuario = MapearUsuario(usuarioInput);
            var response = _usuarioservice.Guardar(usuario);
            if (response.Error){
                ModelState.AddModelError("Guardar Usuario", response.Mensaje);
                var problemDetails = new ValidationProblemDetails(ModelState)
                {
                    Status = StatusCodes.Status400BadRequest,
                };
                return BadRequest(problemDetails);
            }
            return Ok(response.Usuario);
        }
        // GET: api/Usuario
        [HttpGet]
        public IEnumerable<UsuarioViewModel> gets(){
            var usuarios = _usuarioservice.ConsultarTodos().Select(p=>new UsuarioViewModel(p));
            return usuarios;
        }

        // DELETE: api/Usuario/5
        [HttpDelete("{iduser}")]
        public ActionResult<string> Delete(string iduser)
        {
            string mensaje = _usuarioservice.Eliminar(iduser);
            return Ok(mensaje);
        }

        [HttpPut]
        public ActionResult<UsuarioViewModel> Update(UsuarioInputModel usuarioInput){
            User usuario = MapearUsuario(usuarioInput);
            var response = _usuarioservice.Modificar(usuario);
            if (response.Error){
                ModelState.AddModelError("Actualizar Usuario", response.Mensaje);
                var problemDetails = new ValidationProblemDetails(ModelState)
                {
                    Status = StatusCodes.Status400BadRequest,
                };
                return BadRequest(problemDetails);
            }
            return Ok(response.Usuario);
        }

        private User MapearUsuario(UsuarioInputModel usuarioInput){
            var Usuario = new User
            {
                Username = usuarioInput.Username,
                Role = usuarioInput.Role,
                Password = usuarioInput.Password

            };
            return Usuario;
        }
        
    }
}