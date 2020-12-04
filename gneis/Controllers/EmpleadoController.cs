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
    public class EmpleadoController : ControllerBase
    {
        private readonly EmpleadoService _empleadoservice;
        public EmpleadoController(ProyectoContext context){
            _empleadoservice = new EmpleadoService(context);
        }
        [HttpPost]
        public ActionResult<EmpleadoViewModel> post(EmpleadoInputModel empleadoInput){
            Empleado empleado = MapearEmpleado(empleadoInput);
            var response = _empleadoservice.Guardar(empleado);
            if (response.Error){
                return BadRequest(response.Mensaje);
            }
            return Ok(response.Empleado);
        }
        // GET: api/Habitacion
        [HttpGet]
        public IEnumerable<EmpleadoViewModel> gets(){
            var empleado = _empleadoservice.ConsultarTodos().Select(p=>new EmpleadoViewModel(p));
            return empleado;
        }

        // DELETE: api/Habitacion/5
        [HttpDelete("{cedula}")]
        public ActionResult<string> Delete(string cedula)
        {
            string mensaje = _empleadoservice.Eliminar(cedula);
            return Ok(mensaje);
        }

        [HttpPut]
        public ActionResult<string> Update(EmpleadoInputModel empleadoInput){
            Empleado empleado = MapearEmpleado(empleadoInput);
            string mensaje = _empleadoservice.Modificar(empleado);
            return Ok(mensaje);
        }
        
        private Empleado MapearEmpleado(EmpleadoInputModel empleadoInput){
            var empleado = new Empleado
            {
                Cedula = empleadoInput.Cedula,
                Nombre = empleadoInput.Nombre,
                Edad = empleadoInput.Edad,
                Sexo = empleadoInput.Sexo,
                Telefono = empleadoInput.Telefono,
                Correo = empleadoInput.Correo,
                Direccion = empleadoInput.Direccion,
                Cargo = empleadoInput.Cargo,
                Horario = empleadoInput.Horario
                

            };
            return empleado;
        }
    }
}