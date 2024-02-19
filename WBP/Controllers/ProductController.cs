using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WBP.Entities;
using WBP.ViewModels;

namespace WBP.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductController : ControllerBase
    {
        private readonly WBContext _context;

        public ProductController(WBContext context)
        {
            _context = context;
        }

        // GET: api/Product
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Response>>> GetProducts()
        {
            var products = await _context.Products.Where(x => x.Archived == false).OrderBy(x => x.ProductCategory).ThenBy(x => x.ProductName).ToListAsync();
            return Ok(new Response()
            {
                success = true,
                items = products.Cast<object>().ToList()
            });
        }

        // GET: api/Product/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Product>> GetProduct(int id)
        {
            var product = await _context.Products.FindAsync(id);

            if (product == null)
            {
                return NotFound();
            }

            return product;
        }

        // PUT: api/Product/5
        [HttpPut("{id}")]
        public async Task<ActionResult<Response>> PutProduct(int id, Product product)
        {
            try
            {
                if (id != product.Id)
                {
                    return Ok(new Response()
                    {
                        success = false,
                        message = "Product not found"
                    });
                }

                product.Modified = DateTime.Now;
                _context.Entry(product).State = EntityState.Modified;

                await _context.SaveChangesAsync();

                return Ok(new Response()
                {
                    success = true,
                    item = product
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

        // POST: api/Product
        [HttpPost]
        public async Task<ActionResult<Response>> PostProduct(Product product)
        {
            try
            {
                product.Created = DateTime.Now;
                product.ProductName = product.ProductName.Trim();
                product.ProductGrading = product.ProductGrading.Trim();
                _context.Products.Add(product);
                await _context.SaveChangesAsync();

                return Ok(new Response()
                {
                    success = true,
                    item = product
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

        // DELETE: api/Product/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteProduct(int id)
        {
            var product = await _context.Products.FindAsync(id);
            if (product == null)
            {
                return Ok(new Response()
                {
                    success = false,
                    message = "Product not found"
                });
            }

            product.Modified = DateTime.Now;
            product.Archived = true;
            _context.Entry(product).State = EntityState.Modified;

            await _context.SaveChangesAsync();

            return Ok(new Response()
            {
                success = true,
                item = product
            });
        }

    }
}
