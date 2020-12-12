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
    // [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class CheckinController : ControllerBase
    {
        private readonly CheckinService _checkinservice;
        public CheckinController(ProyectoContext context){
            _checkinservice = new CheckinService(context);
        }

        [HttpPost]
        public ActionResult<CheckinViewModel> post(CheckinInputModel checkinInput){
            Checkin checkin = Mapearcheckin(checkinInput);
            var response = _checkinservice.Guardar(checkin);
            if (response.Error){
                ModelState.AddModelError("Guardar Check-in", response.Mensaje);
                var problemDetails = new ValidationProblemDetails(ModelState)
                {
                    Status = StatusCodes.Status400BadRequest,
                };
                return BadRequest(problemDetails);
            }
            return Ok(response.Checkin);
        }
        
        [HttpGet]
        public IEnumerable<CheckinViewModel> gets(){
            var checkin = _checkinservice.ConsultarTodos().Select(p=>new CheckinViewModel(p));
            return checkin;
        }

        
        [HttpDelete("{idcheckin}")]
        public ActionResult<string> Delete(string idcheckin)
        {
            string mensaje = _checkinservice.Eliminar(idcheckin);
            return Ok(mensaje);
        }

         private Checkin Mapearcheckin(CheckinInputModel checkinInput){
            var checkin = new Checkin
            {
                Idcheckin = checkinInput.Idcheckin,
                Idhabitacion = checkinInput.Idhabitacion,
                Idcliente = checkinInput.Idcliente,
                Numeroinvitados = checkinInput.Numeroinvitados,
                Fechaentrada = checkinInput.Fechaentrada,
                
            };
            return checkin;
        }
    }
}