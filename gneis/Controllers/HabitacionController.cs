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
                return BadRequest(response.Mensaje);
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
        public ActionResult<string> Delete(string idhabitacion)
        {
            string mensaje = _habitacionservice.Eliminar(idhabitacion);
            return Ok(mensaje);
        }

        [HttpPut]
        public ActionResult<string> Update(HabitacionInputModel habitacionInput){
            Habitacion habitacion = MapearHabitacion(habitacionInput);
            string mensaje = _habitacionservice.Modificar(habitacion);
            return Ok(mensaje);
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