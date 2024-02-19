using WBP.Entities;

namespace WBP.ViewModels
{
    public class SiloLoadViewModel : Response
    {
        //DropDowns
        public List<Entities.Contract> Contracts { get; set; }
        public List<Customer> Customers { get; set; }
        public List<Product> Products { get; set; }
        public List<Silo> Silos { get; set; }
        public List<Vehicle> Vehicles { get; set; }

        //Values
        public int? ContractId { get; set; }
        public int? SiloId { get; set; }
        public int? VehicleId { get; set; }
        public double FirstWeight { get; set; }
    }
}
