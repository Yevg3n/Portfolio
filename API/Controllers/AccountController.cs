using API.Data;
using API.Entities;
using Microsoft.AspNetCore.Mvc;
using System.Security.Cryptography;
using System.Text;

namespace API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AccountController
    {
        private readonly DataContext _context;
        public AccountController(DataContext context)
        {
            _context = context;
        }

        // TODO: Take JSON instead of parameters
        [HttpPost("register")] // POST: api/account/register?username=admin&password=admin
        public async Task<ActionResult<User>> Register(string username, string password)
        {
            using var hmac = new HMACSHA512();
            var user = new User
            {
                Username = username,
                // TODO: remove password from db later, there's no need for it
                Password = password,
                PasswordHash = hmac.ComputeHash(Encoding.UTF8.GetBytes(password))
            };

            _context.Users.Add(user);
            await _context.SaveChangesAsync();

            return user;
        }
    }
}
