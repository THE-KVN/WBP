using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WBP.Entities;
using WBP.ViewModels;

namespace WBP.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SiloLoadController : ControllerBase
    {
        private readonly WBContext _context;

        public SiloLoadController(WBContext context)
        {
            _context = context;
        }

        // GET: api/SiloLoad
        [HttpGet]
        public async Task<ActionResult<IEnumerable<SiloLoad>>> GetSiloLoads()
        {
            return await _context.SiloLoads.Where(x => x.Archived == false).OrderByDescending(x => x.Created).ToListAsync();
        }

        // GET: api/SiloLoad/5
        [HttpGet("{id}")]
        public async Task<ActionResult<SiloLoad>> GetSiloLoad(int id)
        {
            var siloLoad = await _context.SiloLoads.FindAsync(id);

            if (siloLoad == null)
            {
                return NotFound();
            }

            return siloLoad;
        }

        // PUT: api/SiloLoad/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutSiloLoad(int id, SiloLoad siloLoad)
        {
            if (id != siloLoad.Id)
            {
                return BadRequest();
            }

            siloLoad.Modified = DateTime.Now;
            _context.Entry(siloLoad).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!SiloLoadExists(id))
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

        // POST: api/SiloLoad
        [HttpPost]
        public async Task<ActionResult<SiloLoad>> PostSiloLoad(SiloLoad siloLoad)
        {
            siloLoad.Created = DateTime.Now;
            _context.SiloLoads.Add(siloLoad);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetSiloLoad", new { id = siloLoad.Id }, siloLoad);
        }

        // DELETE: api/SiloLoad/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteSiloLoad(int id)
        {
            var siloLoad = await _context.SiloLoads.FindAsync(id);
            if (siloLoad == null)
            {
                return NotFound();
            }

            siloLoad.Modified = DateTime.Now;
            siloLoad.Archived = true;
            _context.Entry(siloLoad).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (SiloLoadExists(id))
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


        // LOADS
        [HttpGet("/api/getcurrentloading")]
        public async Task<ActionResult<Response>> GetCurrentLoading()
        {
            try
            {
                var currentLoading = await _context.SiloLoads
                                            .Where(x => x.IsFinalized == false && x.LoadTypeId == LoadType.Loading)
                                            .Include(x => x.Silo)
                                            .Include(x => x.Product)
                                            .Include(x => x.Contract)
                                            .OrderByDescending(x => x.Created)
                                            .ToListAsync();

                return Ok(new Response()
                {
                    success = true,
                    items = currentLoading.Cast<object>().ToList()
                });
            }
            catch (Exception ex)
            {
                return new Response() { success = false, message = ex.Message };
            }

        }

        [HttpGet("/api/getcurrentoffloading")]
        public async Task<ActionResult<Response>> GetCurrentOffLoading()
        {
            try
            {
                var currentLoading = await _context.SiloLoads
                                            .Where(x => x.IsFinalized == false && x.LoadTypeId == LoadType.OffLoading)
                                            .Include(x => x.Silo)
                                            .Include(x => x.Product)
                                            .Include(x => x.Contract)
                                            .OrderByDescending(x => x.Created)
                                            .ToListAsync();

                return Ok(new Response()
                {
                    success = true,
                    items = currentLoading.Cast<object>().ToList()
                });
            }
            catch (Exception ex)
            {
                return new Response() { success = false, message = ex.Message };
            }
        }

        [HttpGet("/api/createload")]
        public ActionResult<SiloLoadViewModel> CreateLoad()
        {
            try
            {
                SiloLoadViewModel model = new SiloLoadViewModel();

                model.Contracts = _context.Contracts.Where(x => x.Archived == false).OrderBy(x => x.ContractNumber).ToList();
                model.Customers = _context.Customers.Where(x => x.Archived == false).OrderBy(x => x.CustomerName).ToList();
                model.Products = _context.Products.Where(x => x.Archived == false).OrderBy(x => x.ProductName).ToList();
                model.Vehicles = _context.Vehicles.Where(x => x.Archived == false).OrderBy(x => x.RegistrationNumber).ToList();

                model.success = true;
                return Ok(model);
            }
            catch (Exception ex)
            {
                return new SiloLoadViewModel() { success = false, message = ex.Message };
            }


        }
        [HttpPost("/api/createload")]
        public async Task<ActionResult<Response>> CreateLoad(SiloLoadViewModel load)
        {
            try
            {
                if (load.ContractId == null || load.ContractId == 0)
                {
                    return new Response() { success = false, message = "Contract Required" };
                }
                if (load.SiloId == null || load.SiloId == 0)
                {
                    return new Response() { success = false, message = "Silo Required" };
                }
                if (load.VehicleId == null || load.VehicleId == 0)
                {
                    return new Response() { success = false, message = "Vehicle Required" };
                }

                var contract = _context.Contracts.Find(load.ContractId);

                SiloLoad siloLoad = new SiloLoad()
                {
                    Archived = false,
                    ContractId = load.ContractId,
                    Created = DateTime.Now,
                    FirstWeight = load.FirstWeight,
                    FirstWeightDate = DateTime.Now,
                    LoadType = "Loading",
                    LoadTypeId = LoadType.Loading,
                    ProductId = contract?.ProductId,
                    SiloId = load.SiloId,
                    VehicleId = load.VehicleId,
                };

                _context.SiloLoads.Add(siloLoad);
                await _context.SaveChangesAsync();

                return Ok(new Response()
                {
                    success = true,
                    item = siloLoad
                });

            }
            catch (Exception ex)
            {
                return new Response() { success = false, message = ex.Message };
            }

        }

        [HttpGet("/api/createoffload")]
        public ActionResult<SiloLoadViewModel> CreateOffLoad()
        {
            try
            {
                SiloLoadViewModel model = new SiloLoadViewModel();

                model.Contracts = _context.Contracts.Where(x => x.Archived == false).OrderBy(x => x.ContractNumber).ToList();
                model.Customers = _context.Customers.Where(x => x.Archived == false).OrderBy(x => x.CustomerName).ToList();
                model.Products = _context.Products.Where(x => x.Archived == false).OrderBy(x => x.ProductName).ToList();
                model.Vehicles = _context.Vehicles.Where(x => x.Archived == false).OrderBy(x => x.RegistrationNumber).ToList();

                model.success = true;
                return Ok(model);
            }
            catch (Exception ex)
            {
                return new SiloLoadViewModel() { success = false, message = ex.Message };
            }


        }
        [HttpPost("/api/createoffload")]
        public async Task<ActionResult<Response>> CreateOffLoad(SiloLoadViewModel load)
        {
            try
            {
                if (load.ContractId == null || load.ContractId == 0)
                {
                    return new Response() { success = false, message = "Contract Required" };
                }
                if (load.SiloId == null || load.SiloId == 0)
                {
                    return new Response() { success = false, message = "Silo Required" };
                }
                if (load.VehicleId == null || load.VehicleId == 0)
                {
                    return new Response() { success = false, message = "Vehicle Required" };
                }

                var contract = _context.Contracts.Find(load.ContractId);

                SiloLoad siloLoad = new SiloLoad()
                {
                    Archived = false,
                    ContractId = load.ContractId,
                    Created = DateTime.Now,
                    FirstWeight = load.FirstWeight,
                    FirstWeightDate = DateTime.Now,
                    LoadType = "OffLoading",
                    LoadTypeId = LoadType.OffLoading,
                    ProductId = contract?.ProductId,
                    SiloId = load.SiloId,
                    VehicleId = load.VehicleId,
                };

                _context.SiloLoads.Add(siloLoad);
                await _context.SaveChangesAsync();

                return Ok(new Response()
                {
                    success = true,
                    item = siloLoad
                });

            }
            catch (Exception ex)
            {
                return new Response() { success = false, message = ex.Message };
            }

        }

        //FINALIZE
        [HttpGet("/api/finalizeload")]
        public async Task<ActionResult<Response>> FinalizeLoad(int siloLoadId)
        {
            try
            {
                var load = await _context.SiloLoads
                            .Where(x => x.Id == siloLoadId)
                            .Include(x => x.Silo)
                            .Include(x => x.Product)
                            .Include(x => x.Contract)
                            .OrderByDescending(x => x.Created)
                            .FirstOrDefaultAsync();

                return Ok(new Response()
                {
                    success = true,
                    item = load
                });

            }
            catch (Exception ex)
            {
                return new Response() { success = false, message = ex.Message };
            }


        }

        [HttpPost("/api/finalizeload")]
        public async Task<ActionResult<Response>> FinalizeLoad(SiloLoad siloLoad)
        {
            try
            {
                siloLoad.Modified = DateTime.Now;
                _context.Entry(siloLoad).State = EntityState.Modified;
                await _context.SaveChangesAsync();

                //TODO: Generate waybill file 
                return Ok(new Response()
                {
                    success = true
                });

            }
            catch (Exception ex)
            {
                return new Response() { success = false, message = ex.Message };
            }

        }

        //DOCUMENTS
        [HttpGet("/api/generatewaybil/{id}")]
        public async Task<ActionResult<Response>> GenerateWaybil(int id)
        {
            try
            {
                //var siloLoad = _context.SiloLoads.Include(x => x.Silo).Include(x => x.Product).Include(x => x.Contract).Include(x => x.Vehicle).Where(x => x.Id == id).FirstOrDefault();

                //if (siloLoad == null)
                //{
                //    return new Response() { success = false, message = "Silo load not found" };
                //}

                //TODO: Generate waybill file 
                IronPdf.License.LicenseKey = "IRONSUITE.KEVIN.OLCKERS.GMAIL.COM.20488-280AF7D3D4-J6IKJ-66LCKKEWIUUI-4DW6462E3HU4-H2K75EKOTFY7-7OOO5WKQDPPS-QSM6NCEDQHKK-DYW2QLJBESOS-2O2PXY-TDH5VIVJLB6MEA-DEPLOYMENT.TRIAL-WKZGSF.TRIAL.EXPIRES.19.MAR.2024";
                bool is_licensed = IronPdf.License.IsLicensed;
                // Disable local disk access or cross-origin requests
                Installation.EnableWebSecurity = true;

                // Instantiate Renderer
                var renderer = new ChromePdfRenderer();

                renderer.RenderingOptions.PaperOrientation = IronPdf.Rendering.PdfPaperOrientation.Portrait;
                renderer.RenderingOptions.PaperSize = IronPdf.Rendering.PdfPaperSize.A4;


                renderer.RenderingOptions.MarginBottom = 5;
                renderer.RenderingOptions.MarginTop = 5;
                renderer.RenderingOptions.MarginLeft = 5;
                renderer.RenderingOptions.MarginRight = 5;

                renderer.RenderingOptions.DPI = 300;
                renderer.RenderingOptions.FitToPaperMode = IronPdf.Engines.Chrome.FitToPaperModes.AutomaticFit;
                renderer.RenderingOptions.JpegQuality = 100;
                renderer.RenderingOptions.GrayScale = false;
                renderer.RenderingOptions.Zoom = 100;

                // Create a PDF from a HTML string using C#
                var pdf = renderer.RenderHtmlAsPdf("<h1>Hello World</h1>");

                // Export to a file or Stream
                var pdfDoc = pdf.SaveAs($"wb_{DateTime.Now.Year}{DateTime.Now.Month}{DateTime.Now.Day}.pdf");

                string pdfBase64 = Convert.ToBase64String(pdfDoc.BinaryData);

                // Advanced Example with HTML Assets
                // Load external html assets: Images, CSS and JavaScript.
                // An optional BasePath 'C:\site\assets\' is set as the file location to load assets from
                //var myAdvancedPdf = renderer.RenderHtmlAsPdf("<img src='icons/iron.png'>", @"C:\site\assets\");
                //myAdvancedPdf.SaveAs("html-with-assets.pdf");


                return Ok(new Response()
                {
                    success = true,
                    file = pdfDoc.BinaryData,
                    message = pdfBase64
                });

            }
            catch (Exception ex)
            {
                return new Response() { success = false, message = ex.Message };
            }

        }

















        private bool SiloLoadExists(int id)
        {
            return _context.SiloLoads.Any(e => e.Id == id);
        }
    }
}
