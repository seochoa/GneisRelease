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
    public class HabitacionController : ControllerBase
    {
        private readonly HabitacionService _habitacionservice;
        public HabitacionController(ProyectoContext context){
            _habitacionservice = new HabitacionService(context);
        }

        //POST: api/Habitacion
        [HttpPost]
        public ActionResult<HabitacionViewModel> post(HabitacionInputModel habitacionInput){
            Habitacion habitacion = MapearHabitacion(habitacionInput);
            var response = _habitacionservice.Guardar(habitacion);
            if (response.Error){
                ModelState.AddModelError("Guardar Habitacion", response.Mensaje);
                var problemDetails = new ValidationProblemDetails(ModelState)
                {
                    Status = StatusCodes.Status400BadRequest,
                };
                return BadRequest(problemDetails);
            }
            return Ok(response.Habitacion);
        }
        // GET: api/Habitacion
        [HttpGet]
        public IEnumerable<HabitacionViewModel> gets(){
            var habitacion = _habitacionservice.ConsultarTodos().Select(p=>new HabitacionViewModel(p));
            return habitacion;
        }

        // GET: api/Habitacion/5
        [HttpGet("{idhabitacion}")]
        public ActionResult<HabitacionViewModel> get(string idhabitacion){
            var habitacion = _habitacionservice.BuscarPorID(idhabitacion);
            if(habitacion == null)return NotFound();
            var habitacionViewModel = new HabitacionViewModel(habitacion);
            return habitacionViewModel;
        }

        // DELETE: api/Habitacion/5
        [HttpDelete("{idhabitacion}")]
        public ActionResult<HabitacionViewModel> Delete(string idhabitacion)
        {
            var response = _habitacionservice.Eliminar(idhabitacion);
            if (response.Error){
                ModelState.AddModelError("Eliminar Habitacion", "Esta habitación tiene reservas en curso, cancele las reservas o espere el cierre de estas.");
                var problemDetails = new ValidationProblemDetails(ModelState)
                {
                    Status = StatusCodes.Status400BadRequest,
                };
                return BadRequest(problemDetails);
            }
            return Ok(response.Habitacion);
        }

        [HttpPut]
        public ActionResult<string> Update(HabitacionInputModel habitacionInput){
            Habitacion habitacion = MapearHabitacion(habitacionInput);
            var response = _habitacionservice.Modificar(habitacion);
            if (response.Error){
                ModelState.AddModelError("Actualizar Habitacion", response.Mensaje);
                var problemDetails = new ValidationProblemDetails(ModelState)
                {
                    Status = StatusCodes.Status400BadRequest,
                };
                return BadRequest(problemDetails);
            }
            return Ok(response.Habitacion);
        }

        private Habitacion MapearHabitacion(HabitacionInputModel habitacionInput){
            var Habitacion = new Habitacion
            {
                Idhabitacion = habitacionInput.Idhabitacion,
                Tipo = habitacionInput.Tipo,
                Costo = habitacionInput.Costo,
                Estado = habitacionInput.Estado,
                Usos = habitacionInput.Usos
                

            };
            return Habitacion;
        }
        
    }
}