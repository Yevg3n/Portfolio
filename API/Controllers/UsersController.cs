using API.Data;
using API.Entities;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    [Authorize]
    public class UsersController : BaseAPIController
    {
        private readonly DataContext _context;
        public UsersController(DataContext context)
        {
            _context = context;
        }

        // TODO: Change it later to search by username instead of id.
        // TODO: Handle no Database connection error.
        [HttpGet("{id}")]
        public async Task<ActionResult<User>> GetUser(int id)
        {   
            return await _context.Users.FindAsync(id);
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<User>>> GetAllUsers()
        {
            var users = await _context.Users.ToListAsync();
            return users;
        }
    }
}
