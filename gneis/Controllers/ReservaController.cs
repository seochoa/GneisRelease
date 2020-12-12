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
using Microsoft.AspNetCore.SignalR;
using gneis.Hubs;

namespace gneis.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class ReservaController : ControllerBase
    {
        private readonly IHubContext<SignalHub> _hubContext;
        private readonly ReservaService _reservaservice;
        public ReservaController(ProyectoContext context,IHubContext<SignalHub> hubContext){
            _reservaservice = new ReservaService(context);
            _hubContext = hubContext;
        }

        [HttpPost]
        public async Task<ActionResult<ReservaViewModel>> post(ReservaInputModel reservaInput){
            Reserva reserva = MapearReserva(reservaInput);
            var response = _reservaservice.Guardar(reserva);
            if (response.Error){
                ModelState.AddModelError("Guardar Reserva", response.Mensaje);
                var problemDetails = new ValidationProblemDetails(ModelState)
                {
                    Status = StatusCodes.Status400BadRequest,
                };
                return BadRequest(problemDetails);
            }
            var reservaViewModel = new ReservaViewModel(response.Reserva);
            await _hubContext.Clients.All.SendAsync("reservaRegistrada", reservaViewModel);
            return Ok(reservaViewModel);
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