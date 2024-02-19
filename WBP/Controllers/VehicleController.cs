using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WBP.Entities;
using WBP.ViewModels;

namespace WBP.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class VehicleController : ControllerBase
    {
        private readonly WBContext _context;

        public VehicleController(WBContext context)
        {
            _context = context;
        }

        // GET: api/Vehicle
        [HttpGet]
        public async Task<ActionResult<Response>> GetVehicles()
        {
            var vehicles = await _context.Vehicles.Where(x => x.Archived == false).OrderBy(x => x.RegistrationNumber).ToListAsync();
            return Ok(new Response()
            {
                success = true,
                items = vehicles.Cast<object>().ToList()
            });
        }

        // GET: api/Vehicle/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Vehicle>> GetVehicle(int id)
        {
            var vehicle = await _context.Vehicles.FindAsync(id);

            if (vehicle == null)
            {
                return NotFound();
            }

            return vehicle;
        }

        // PUT: api/Vehicle/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutVehicle(int id, Vehicle vehicle)
        {
            if (id != vehicle.Id)
            {
                return BadRequest();
            }

            vehicle.Modified = DateTime.Now;
            _context.Entry(vehicle).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!VehicleExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Vehicle
        [HttpPost]
        public async Task<ActionResult<Response>> PostVehicle(Vehicle vehicle)
        {
            if (VehicleExists(vehicle.RegistrationNumber))
            {
                return Ok(new Response()
                {
                    success = false,
                    message = "Vehicle with this registration already exists"
                });
            }

            vehicle.RegistrationNumber = vehicle.RegistrationNumber.Trim();
            vehicle.Created = DateTime.Now;
            _context.Vehicles.Add(vehicle);
            await _context.SaveChangesAsync();

            return Ok(new Response()
            {
                success = true,
                item = vehicle
            });



        }

        // DELETE: api/Vehicle/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteVehicle(int id)
        {
            var vehicle = await _context.Vehicles.FindAsync(id);
            if (vehicle == null)
            {
                return NotFound();
            }

            vehicle.Modified = DateTime.Now;
            vehicle.Archived = true;
            _context.Entry(vehicle).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (VehicleExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        private bool VehicleExists(int id)
        {
            return _context.Vehicles.Any(e => e.Id == id);
        }
        private bool VehicleExists(string registration)
        {
            return _context.Vehicles.Any(e => e.RegistrationNumber.Trim().ToLower() == registration.Trim().ToLower() && e.Archived == false);
        }
    }
}
