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
            //Add silo's
            modelBuilder.Entity<Silo>().HasData(
                new Silo() { Archived = false, Capacity = 1000, Created = DateTime.Now, CurrentMeasurement = 0, FriendlyName = "Silo 1", Id = 1, Modified = null, Number = 1, PrecentageFull = 0, ProductId = null, SpaceAvailable = 1000 },
                new Silo() { Archived = false, Capacity = 1000, Created = DateTime.Now, CurrentMeasurement = 0, FriendlyName = "Silo 2", Id = 2, Modified = null, Number = 2, PrecentageFull = 0, ProductId = null, SpaceAvailable = 1000 },
                new Silo() { Archived = false, Capacity = 1000, Created = DateTime.Now, CurrentMeasurement = 0, FriendlyName = "Silo 3", Id = 3, Modified = null, Number = 3, PrecentageFull = 0, ProductId = null, SpaceAvailable = 1000 },
                new Silo() { Archived = false, Capacity = 1000, Created = DateTime.Now, CurrentMeasurement = 0, FriendlyName = "Silo 4", Id = 4, Modified = null, Number = 4, PrecentageFull = 0, ProductId = null, SpaceAvailable = 1000 },
                new Silo() { Archived = false, Capacity = 1000, Created = DateTime.Now, CurrentMeasurement = 0, FriendlyName = "Silo 5", Id = 5, Modified = null, Number = 5, PrecentageFull = 0, ProductId = null, SpaceAvailable = 1000 },
                new Silo() { Archived = false, Capacity = 1000, Created = DateTime.Now, CurrentMeasurement = 0, FriendlyName = "Silo 6", Id = 6, Modified = null, Number = 6, PrecentageFull = 0, ProductId = null, SpaceAvailable = 1000 },
                new Silo() { Archived = false, Capacity = 1000, Created = DateTime.Now, CurrentMeasurement = 0, FriendlyName = "Silo 7", Id = 7, Modified = null, Number = 7, PrecentageFull = 0, ProductId = null, SpaceAvailable = 1000 },
                new Silo() { Archived = false, Capacity = 1000, Created = DateTime.Now, CurrentMeasurement = 0, FriendlyName = "Silo 8", Id = 8, Modified = null, Number = 8, PrecentageFull = 0, ProductId = null, SpaceAvailable = 1000 }

            );

        }


    }
}
