using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WBP.Entities;
using WBP.ViewModels;

namespace WBP.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SiloController : ControllerBase
    {
        private readonly WBContext _context;

        public SiloController(WBContext context)
        {
            _context = context;
        }

        // GET: api/Silo
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Silo>>> GetSilos()
        {
            return await _context.Silos.Where(x => x.Archived == false).OrderBy(x => x.Number).ToListAsync();
        }

        // GET: api/Silo/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Silo>> GetSilo(int id)
        {
            var silo = await _context.Silos.FindAsync(id);

            if (silo == null)
            {
                return NotFound();
            }

            return silo;
        }

        // PUT: api/Silo/5
        [HttpPut("{id}")]
        public async Task<ActionResult<Response>> PutSilo(int id, Silo silo)
        {
            try
            {
                if (id != silo.Id)
                {
                    return Ok(new Response()
                    {
                        success = false,
                        message = "Silo not found"
                    });
                }

                silo.Modified = DateTime.Now;
                _context.Entry(silo).State = EntityState.Modified;

                await _context.SaveChangesAsync();

                return Ok(new Response()
                {
                    success = true,
                    item = silo
                });
            }
            catch (Exception ex)
            {
                return Ok(new Response()
                {
                    success = false,
                    message = ex.Message
                });
            }
        }

        // POST: api/Silo
        [HttpPost]
        public async Task<ActionResult<Silo>> PostSilo(Silo silo)
        {
            silo.Created = DateTime.Now;
            _context.Silos.Add(silo);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetSilo", new { id = silo.Id }, silo);
        }



        //Logic
        [HttpGet("/api/loadsilodata")]
        public async Task<ActionResult<Response>> LoadSiloData()
        {
            try
            {
                var siloData = await _context.Silos
                                    .Where(x => x.Archived == false)
                                    .Include(x => x.Product)
                                    .OrderBy(x => x.Number)
                                    .ToListAsync();

                return Ok(new Response()
                {
                    success = true,
                    items = siloData.Cast<object>().ToList()
                });
            }
            catch (Exception ex)
            {
                return new Response() { success = false, message = ex.Message };
            }

        }



        private bool SiloExists(int id)
        {
            return _context.Silos.Any(e => e.Id == id);
        }
    }
}
