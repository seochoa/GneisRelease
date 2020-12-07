using Datos;
using Entidad;
using System;
using System.Collections.Generic;
using System.Linq;

namespace Logica
{
    public class ProductoService
    {
        private readonly ProyectoContext _context;

        public ProductoService(ProyectoContext context){
            _context=context;
        }

        public GuardarProductoResponse Guardar(Producto producto){
            try{
                var ProductoBuscado = _context.Productos.Find(producto.Idproducto);
                if(ProductoBuscado !=null){
                    return new GuardarProductoResponse ("Error La Persona Ya se encuentra registrada");
                }

                _context.Productos.Add(producto);
                _context.SaveChanges();
                return new GuardarProductoResponse (producto);

            }
            catch(Exception e){
                return new GuardarProductoResponse ($"Error de la aplicacion: {e.Message}");
            }
        }

        public List<Producto> ConsultarTodos(){
            List<Producto> Productos = _context.Productos.ToList();
            return Productos;
        }

        public Producto BuscarPorID(string idproducto){
            Producto producto = _context.Productos.Find(idproducto);
            return producto;
        }

        public string Eliminar (string idproducto){
            try{
                var ProductoBuscado = _context.Productos.Find(idproducto);
                if(ProductoBuscado !=null){
                    _context.Productos.Remove(ProductoBuscado);
                    _context.SaveChanges();
                    return ($"El registro se ha eliminado sastifactoriamente.");
                }
                else{
                    return ($"La Identificacion no se encuentra en nuestra base de datos");
                }
            }
            catch(Exception e){
                return $"Error de la aplicacion: {e.Message}";
            }
        }

        public GuardarProductoResponse Modificar (Producto productonuevo){
            try{
                var Productoviejo = _context.Productos.Find(productonuevo.Idproducto);
                if(Productoviejo !=null){
                    Productoviejo.Idproducto = productonuevo.Idproducto;
                    Productoviejo.Descripcion = productonuevo.Descripcion;
                    Productoviejo.Stock = productonuevo.Stock;
                    Productoviejo.Vrunitario = productonuevo.Vrunitario;
                    _context.Productos.Update(Productoviejo);
                    _context.SaveChanges();
                    return new GuardarProductoResponse (Productoviejo);
                }
                else{
                    return new GuardarProductoResponse ($"La Identificacion no se encuentra en nuestra base de datos");
                }
            }
            catch(Exception e){
                return new GuardarProductoResponse ($"Error de la aplicacion: {e.Message}");
            }
        }
        
    }

    public class GuardarProductoResponse
    {
        public GuardarProductoResponse(Producto producto)
        {
            Error = false;
            Producto = producto;
        }
        public GuardarProductoResponse(string mensaje)
        {
            Error = true;
            Mensaje = mensaje;
        }
        public bool Error { get; set; }
        public string Mensaje { get; set; }
        public Producto Producto { get; set; }
    }
}