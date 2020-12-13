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
    public class CheckoutController : ControllerBase
    {
        private readonly CheckoutService _checkoutservice;
        public CheckoutController(ProyectoContext context){
            _checkoutservice = new CheckoutService(context);
        }

        [HttpPost]
        public ActionResult<CheckoutViewModel> post(CheckoutInputModel checkoutInput){
            Checkout checkout = Mapearcheckout(checkoutInput);
            var response = _checkoutservice.Guardar(checkout);
            if (response.Error){
                ModelState.AddModelError("Guardar Check-Out", response.Mensaje);
                var problemDetails = new ValidationProblemDetails(ModelState)
                {
                    Status = StatusCodes.Status400BadRequest,
                };
                return BadRequest(problemDetails);
            }
            return Ok(response.Checkout);
        }
        
        [HttpGet]
        public IEnumerable<CheckoutViewModel> gets(){
            var checkout = _checkoutservice.ConsultarTodos().Select(p=>new CheckoutViewModel(p));
            return checkout;
        }

        
        [HttpDelete("{idcheckout}")]
        public ActionResult<string> Delete(string idcheckout)
        {
            string mensaje = _checkoutservice.Eliminar(idcheckout);
            return Ok(mensaje);
        }

        private Checkout Mapearcheckout(CheckoutInputModel checkoutInput){
            var checkout= new Checkout
            {
                Idcheckout = checkoutInput.Idcheckout,
                Idhabitacion = checkoutInput.Idhabitacion,
                Idcliente = checkoutInput.Idcliente,
                Numeroinvitados = checkoutInput.Numeroinvitados,
                Fechaentrada = checkoutInput.Fechaentrada,
                Fechasalida = checkoutInput.Fechasalida,
                DiasHospedaje = checkoutInput.DiasHospedaje,
                TotalHospedaje = checkoutInput.TotalHospedaje
            };
            return checkout;
        }
        
    }
}