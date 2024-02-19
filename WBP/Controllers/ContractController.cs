using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WBP.Entities;
using WBP.ViewModels;

namespace WBP.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ContractController : ControllerBase
    {
        private readonly WBContext _context;

        public ContractController(WBContext context)
        {
            _context = context;
        }

        // GET: api/Contract
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Response>>> GetContracts()
        {
            var contracts = await _context.Contracts.Where(x => x.Archived == false).Include(x => x.Customer).Include(x => x.Product).OrderBy(x => x.ContractNumber).ToListAsync();
            return Ok(new Response()
            {
                success = true,
                items = contracts.Cast<object>().ToList()
            });
        }

        // GET: api/Contract/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Contract>> GetContract(int id)
        {
            var contract = await _context.Contracts.FindAsync(id);

            if (contract == null)
            {
                return NotFound();
            }

            return contract;
        }

        // PUT: api/Contract/5
        [HttpPut("{id}")]
        public async Task<ActionResult<Response>> PutContract(int id, Contract contract)
        {
            try
            {
                if (id != contract.Id)
                {
                    return Ok(new Response()
                    {
                        success = false,
                        message = "Contract not found"
                    });
                }

                contract.Modified = DateTime.Now;
                _context.Entry(contract).State = EntityState.Modified;

                await _context.SaveChangesAsync();

                return Ok(new Response()
                {
                    success = true,
                    item = contract
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

        // POST: api/Contract
        [HttpPost]
        public async Task<ActionResult<Response>> PostContract(Contract contract)
        {
            if (ContractExists(contract.ContractNumber, contract.ProductId))
            {
                return Ok(new Response()
                {
                    success = false,
                    message = "Contract with this number and for this product already exists"
                });
            }

            contract.ContractNumber = contract.ContractNumber.Trim();
            contract.Created = DateTime.Now;
            _context.Contracts.Add(contract);
            await _context.SaveChangesAsync();

            return Ok(new Response()
            {
                success = true,
                item = contract
            });
        }

        // DELETE: api/Contract/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteContract(int id)
        {
            var contract = await _context.Contracts.FindAsync(id);
            if (contract == null)
            {
                return NotFound();
            }

            contract.Modified = DateTime.Now;
            contract.Archived = true;
            _context.Entry(contract).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ContractExists(id))
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

        private bool ContractExists(int id)
        {
            return _context.Contracts.Any(e => e.Id == id);
        }

        private bool ContractExists(string number, int? productid)
        {
            return _context.Contracts.Any(e => e.ContractNumber.Trim().ToLower() == number.Trim().ToLower() && e.ProductId == productid && e.Archived == false);
        }
    }
}
