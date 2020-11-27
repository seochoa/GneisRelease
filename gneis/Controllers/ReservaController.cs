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
    public class ReservaController : ControllerBase
    {
        private readonly ReservaService _reservaservice;
        public ReservaController(ProyectoContext context){
            _reservaservice = new ReservaService(context);
        }

        [HttpPost]
        public ActionResult<ReservaViewModel> post(ReservaInputModel reservaInput){
            Reserva reserva = MapearReserva(reservaInput);
            var response = _reservaservice.Guardar(reserva);
            if (response.Error){
                return BadRequest(response.Mensaje);
            }
            return Ok(response.Reserva);
        }
        // GET: api/Producto
        [HttpGet]
        public IEnumerable<ReservaViewModel> gets(){
            var reserva = _reservaservice.ConsultarTodos().Select(p=>new ReservaViewModel(p));
            return reserva;
        }

        // DELETE: api/Producto/5
        [HttpDelete("{idreserva}")]
        public ActionResult<string> Delete(string idreserva)
        {
            string mensaje = _reservaservice.Eliminar(idreserva);
            return Ok(mensaje);
        }

        private Reserva MapearReserva(ReservaInputModel reservaInput){
            var Reserva = new Reserva
            {
                Idreserva = reservaInput.Idreserva,
                Idhabitacion = reservaInput.Idhabitacion,
                Idcliente = reservaInput.Idcliente,
                Numeroinvitados = reservaInput.Numeroinvitados,
                Fechareserva = reservaInput.Fechareserva
                

            };
            return Reserva;
        }
        
    }
}