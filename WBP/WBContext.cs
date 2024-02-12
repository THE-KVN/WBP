using Microsoft.EntityFrameworkCore;
using WBP.Entities;

namespace WBP
{
    public class WBContext : DbContext
    {

        public WBContext(DbContextOptions<WBContext> options) : base(options)
        {
        }

        public DbSet<Silo> Silos { get; set; }
        public DbSet<SiloLoad> SiloLoads { get; set; }
        public DbSet<Vehicle> Vehicles { get; set; }
        public DbSet<Product> Products { get; set; }
        public DbSet<Customer> Customers { get; set; }
        public DbSet<Contract> Contracts { get; set; }
        public DbSet<Settings> Settings { get; set; }

        // ... other entity sets for your entities (Customer, Contract, etc.)

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {

        }
    }
}
