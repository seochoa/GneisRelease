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
                return BadRequest(response.Mensaje);
            }
            return Ok(response.Cliente);
        }
        // GET: api/Producto
        [HttpGet]
        public IEnumerable<ClienteViewModel> gets(){
            var cliente = _clienteservice.ConsultarTodos().Select(p=>new ClienteViewModel(p));
            return cliente;
        }

        // DELETE: api/Producto/5
        [HttpDelete("{cedula}")]
        public ActionResult<string> Delete(string cedula)
        {
            string mensaje = _clienteservice.Eliminar(cedula);
            return Ok(mensaje);
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