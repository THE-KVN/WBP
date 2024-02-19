using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WBP.Entities;

namespace WBP.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SettingController : ControllerBase
    {
        private readonly WBContext _context;

        public SettingController(WBContext context)
        {
            _context = context;
        }

        // GET: api/Setting
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Settings>>> GetSettings()
        {
            return await _context.Settings.Where(x => x.Archived == false).OrderBy(x => x.Name).ToListAsync();
        }

        // GET: api/Setting/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Settings>> GetSettings(int id)
        {
            var settings = await _context.Settings.FindAsync(id);

            if (settings == null)
            {
                return NotFound();
            }

            return settings;
        }

        // PUT: api/Setting/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutSettings(int id, Settings settings)
        {
            if (id != settings.Id)
            {
                return BadRequest();
            }

            settings.Modified = DateTime.Now;
            _context.Entry(settings).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!SettingsExists(id))
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

        // POST: api/Setting
        [HttpPost]
        public async Task<ActionResult<Settings>> PostSettings(Settings settings)
        {
            settings.Created = DateTime.Now;
            _context.Settings.Add(settings);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetSettings", new { id = settings.Id }, settings);
        }

        // DELETE: api/Setting/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteSettings(int id)
        {
            var settings = await _context.Settings.FindAsync(id);
            if (settings == null)
            {
                return NotFound();
            }

            settings.Modified = DateTime.Now;
            settings.Archived = true;
            _context.Entry(settings).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (SettingsExists(id))
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

        private bool SettingsExists(int id)
        {
            return _context.Settings.Any(e => e.Id == id);
        }
    }
}
