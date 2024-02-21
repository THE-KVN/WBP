using Microsoft.EntityFrameworkCore;

namespace WBP
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            // Add services to the container.

            builder.Services.AddControllers();

            builder.Services.AddCors();

            // Add DbContext configuration
            builder.Services.AddDbContext<WBContext>(options =>
                options.UseSqlite(
                    "Data Source=C:\\WB\\Database\\wbprod.db"
                )
            );

            var app = builder.Build();

            // Configure the HTTP request pipeline.

            app.UseHttpsRedirection();

            app.UseAuthorization();

            app.MapControllers();

            app.UseCors(o => o.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader());

            app.Run();
        }
    }
}
