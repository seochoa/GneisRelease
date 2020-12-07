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
    public class ProductoController : ControllerBase
    {
        private readonly ProductoService _productoservice;
        public ProductoController(ProyectoContext context){
            _productoservice = new ProductoService(context);
        }

        //POST: api/Producto
        [HttpPost]
        public ActionResult<ProductoViewModel> post(ProductoInputModel productoInput){
            Producto producto = MapearProducto(productoInput);
            var response = _productoservice.Guardar(producto);
            if (response.Error){
                ModelState.AddModelError("Guardar Producto", response.Mensaje);
                var problemDetails = new ValidationProblemDetails(ModelState)
                {
                    Status = StatusCodes.Status400BadRequest,
                };
                return BadRequest(problemDetails);
            }
            return Ok(response.Producto);
        }
        // GET: api/Producto
        [HttpGet]
        public IEnumerable<ProductoViewModel> gets(){
            var producto = _productoservice.ConsultarTodos().Select(p=>new ProductoViewModel(p));
            return producto;
        }

        // GET: api/Producto/5
        [HttpGet("{idproducto}")]
        public ActionResult<ProductoViewModel> get(string idproducto){
            var producto = _productoservice.BuscarPorID(idproducto);
            if(producto == null)return NotFound();
            var productoViewModel = new ProductoViewModel(producto);
            return productoViewModel;
        }

        // DELETE: api/Producto/5
        [HttpDelete("{idproducto}")]
        public ActionResult<string> Delete(string idproducto)
        {
            string mensaje = _productoservice.Eliminar(idproducto);
            return Ok(mensaje);
        }

        [HttpPut]
        public ActionResult<string> Update(ProductoInputModel productoInput){
            Producto producto = MapearProducto(productoInput);
            var response = _productoservice.Modificar(producto);
            if (response.Error){
                ModelState.AddModelError("Actualizar Producto", response.Mensaje);
                var problemDetails = new ValidationProblemDetails(ModelState)
                {
                    Status = StatusCodes.Status400BadRequest,
                };
                return BadRequest(problemDetails);
            }
            return Ok(response.Producto);
        }

        

        private Producto MapearProducto(ProductoInputModel productoInput){
            var Producto = new Producto
            {
                Idproducto = productoInput.Idproducto,
                Descripcion = productoInput.Descripcion,
                Stock = productoInput.Stock,
                Vrunitario = productoInput.Vrunitario

            };
            return Producto;
        }
        
    }
}