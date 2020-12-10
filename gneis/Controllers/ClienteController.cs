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
    public class ClienteController : ControllerBase
    {
        private readonly ClienteService _clienteservice;
        public ClienteController(ProyectoContext context){
            _clienteservice = new ClienteService(context);
        }

        [HttpPost]
        public ActionResult<ClienteViewModel> post(ClienteInputModel clienteInput){
            Cliente cliente = MapearCliente(clienteInput);
            var response = _clienteservice.Guardar(cliente);
            if (response.Error){
                ModelState.AddModelError("Guardar Cliente", response.Mensaje);
                var problemDetails = new ValidationProblemDetails(ModelState)
                {
                    Status = StatusCodes.Status400BadRequest,
                };
                return BadRequest(problemDetails);
            }
            return Ok(response.Cliente);
        }
        // GET: api/Producto
        [HttpGet]
        public IEnumerable<ClienteViewModel> gets(){
            var cliente = _clienteservice.ConsultarTodos().Select(p=>new ClienteViewModel(p));
            return cliente;
        }

        [HttpGet("{cedula}")]
        public ActionResult<ClienteViewModel> get(string cedula){
            var cliente = _clienteservice.BuscarPorID(cedula);
            if(cliente == null)return NotFound();
            var clienteView = new ClienteViewModel(cliente);
            return clienteView;
        }

        // DELETE: api/Producto/5
        [HttpDelete("{cedula}")]
        public ActionResult<string> Delete(string cedula)
        {
            string mensaje = _clienteservice.Eliminar(cedula);
            return Ok(mensaje);
        }

        [HttpPut]
        public ActionResult<string> Update(ClienteInputModel clienteInput){
            Cliente cliente = MapearCliente(clienteInput);
            var response  = _clienteservice.Modificar(cliente);
            if (response.Error){
                ModelState.AddModelError("Guardar Cliente", response.Mensaje);
                var problemDetails = new ValidationProblemDetails(ModelState)
                {
                    Status = StatusCodes.Status400BadRequest,
                };
                return BadRequest(problemDetails);
            }
            return Ok(response.Cliente);
        }

        private Cliente MapearCliente(ClienteInputModel clienteInput){
            var Cliente = new Cliente
            {
                Cedula = clienteInput.Cedula,
                Nombre = clienteInput.Nombre,
                Edad = clienteInput.Edad,
                Sexo = clienteInput.Sexo,
                Telefono = clienteInput.Telefono,
                Correo = clienteInput.Correo,
                Direccion = clienteInput.Direccion,
                Hospedajes = clienteInput.Hospedajes
                

            };
            return Cliente;
        }
        
    }
}