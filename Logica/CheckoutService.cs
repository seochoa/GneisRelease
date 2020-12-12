using Datos;
using Entidad;
using System;
using System.Collections.Generic;
using System.Linq;
namespace Logica
{
    public class CheckoutService
    {
        private readonly ProyectoContext _context;

        public CheckoutService(ProyectoContext context){
            _context=context;
        }

        public GuardarCheckoutResponse Guardar(Checkout checkout){
            try{
                var checkoutbuscado = _context.Checkouts.Find(checkout.Idcheckout);
                if(checkoutbuscado !=null){
                    return new GuardarCheckoutResponse ("La Salida Ya se encuentra registrada");
                }

                _context.Checkouts.Add(checkout);
                _context.SaveChanges();
                return new GuardarCheckoutResponse (checkout);

            }
            catch(Exception e){
                return new GuardarCheckoutResponse ($"Error de la aplicacion: {e.Message}");
            }
        }

        public List<Checkout> ConsultarTodos(){
            List<Checkout> checkouts = _context.Checkouts.ToList();
            return checkouts;
        }

        
        public string Eliminar (string idcheckout){
            try{
                var checkoutBuscado = _context.Checkouts.Find(idcheckout);
                if(checkoutBuscado !=null){
                    _context.Checkouts.Remove(checkoutBuscado);
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
    }

    public class GuardarCheckoutResponse
    {
        public GuardarCheckoutResponse(Checkout checkout)
        {
            Error = false;
            Checkout = checkout;
        }
        public GuardarCheckoutResponse(string mensaje)
        {
            Error = true;
            Mensaje = mensaje;
        }
        public bool Error { get; set; }
        public string Mensaje { get; set; }
        public Checkout Checkout { get; set; }
    }
}