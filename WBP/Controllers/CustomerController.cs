using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WBP.Entities;
using WBP.ViewModels;

namespace WBP.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CustomerController : ControllerBase
    {
        private readonly WBContext _context;

        public CustomerController(WBContext context)
        {
            _context = context;
        }

        // GET: api/Customer
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Response>>> GetCustomers()
        {
            var customers = await _context.Customers.Where(x => x.Archived == false).OrderBy(x => x.CustomerName).ToListAsync();
            return Ok(new Response()
            {
                success = true,
                items = customers.Cast<object>().ToList()
            });
        }

        // GET: api/Customer/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Customer>> GetCustomer(int id)
        {
            var customer = await _context.Customers.FindAsync(id);

            if (customer == null)
            {
                return NotFound();
            }

            return customer;
        }

        // PUT: api/Customer/5
        [HttpPut("{id}")]
        public async Task<ActionResult<Response>> PutCustomer(int id, Customer customer)
        {
            try
            {
                if (id != customer.Id)
                {
                    return Ok(new Response()
                    {
                        success = false,
                        message = "Customer not found"
                    });
                }

                customer.Modified = DateTime.Now;
                _context.Entry(customer).State = EntityState.Modified;

                await _context.SaveChangesAsync();

                return Ok(new Response()
                {
                    success = true,
                    item = customer
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

        // POST: api/Customer
        [HttpPost]
        public async Task<ActionResult<Response>> PostCustomer(Customer customer)
        {
            if (CustomerExists(customer.CustomerName))
            {
                return Ok(new Response()
                {
                    success = false,
                    message = "Customer already exists"
                });
            }

            customer.CustomerName = customer.CustomerName.Trim();
            customer.Created = DateTime.Now;
            _context.Customers.Add(customer);
            await _context.SaveChangesAsync();

            return Ok(new Response()
            {
                success = true,
                item = customer
            });
        }

        // DELETE: api/Customer/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Response>> DeleteCustomer(int id)
        {
            var customer = await _context.Customers.FindAsync(id);
            if (customer == null)
            {
                return Ok(new Response()
                {
                    success = false,
                    message = "Customer not found"
                });
            }

            customer.Modified = DateTime.Now;
            customer.Archived = true;
            _context.Entry(customer).State = EntityState.Modified;

            await _context.SaveChangesAsync();

            return Ok(new Response()
            {
                success = true,
                item = customer
            });
        }

        private bool CustomerExists(int id)
        {
            return _context.Customers.Any(e => e.Id == id);
        }

        private bool CustomerExists(string name)
        {
            return _context.Customers.Any(e => e.CustomerName.Trim().ToLower() == name.Trim().ToLower() && e.Archived == false);
        }
    }
}
