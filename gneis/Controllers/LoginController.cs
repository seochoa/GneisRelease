using Datos;
using Entidad;
using Logica;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using gneis.Config;
using gneis.Models;
using gneis.Service;

namespace gneis.Controllers
{
    [Authorize]
    [ApiController]
    [Route("api/[controller]")]
    public class LoginController: ControllerBase
    {
        private JwtService _jwtService;
        private UserService _userService;

        ProyectoContext _context;
        public LoginController(ProyectoContext context, IOptions<AppSetting> appSettings)
        {
            _context = context;
            var admin = _context.Users.Find("admin");
            if (admin == null)
            {
                _context.Users.Add(new Entidad.User() { Username = "admin", Password = "admin", Role = "Administrador" });
                var i = _context.SaveChanges();
            }
            _jwtService = new JwtService(appSettings);
            _userService = new UserService(context);
        }

        [AllowAnonymous]
        [HttpPost()]
        public IActionResult Login(LoginInputModel model)
        {
            var user = _userService.Validate(model.Username, model.Password);

            if (user == null)
            {
                ModelState.AddModelError("Acceso Denegado", "Username or password is incorrect");
                var problemDetails = new ValidationProblemDetails(ModelState)
                {
                    Status = StatusCodes.Status400BadRequest,
                };
                return BadRequest(problemDetails);
            }
            var response = _jwtService.GenerateToken(user);

            return Ok(response);
        }
    }
}