using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace WBP.Entities
{
    #region Silo

    public class Silo : BaseClass
    {
        [Key]
        public int Id { get; set; }
        public int Number { get; set; }
        public string FriendlyName { get; set; }
        public decimal CurrentMeasurement { get; set; }
        public decimal Capacity { get; set; }
        public decimal SpaceAvailable { get; set; }
        public int PrecentageFull { get; set; }


        [ForeignKey("Product")]
        public int? ProductId { get; set; }
        public virtual Product? Product { get; set; }

        public SiloType SiloType { get; set; }

        public Silo()
        {

        }
    }

    #endregion

    #region SiloLoad

    public class SiloLoad : BaseClass
    {
        [Key]
        public int Id { get; set; }
        public LoadType LoadTypeId { get; set; }
        public string LoadType { get; set; }
        public decimal FirstWeight { get; set; }
        public decimal SecondWeight { get; set; }
        public decimal TotalWeigth { get; set; }

        public DateTime? FirstWeightDate { get; set; }
        public DateTime? SecondWeightDate { get; set; }

        public bool IsFinalized { get; set; }
        public DateTime? FinalizedDate { get; set; }


        [ForeignKey("Silo")]
        public int? SiloId { get; set; }
        public virtual Silo? Silo { get; set; }

        [ForeignKey("Product")]
        public int? ProductId { get; set; }
        public virtual Product? Product { get; set; }

        [ForeignKey("Contract")]
        public int? ContractId { get; set; }
        public virtual Contract? Contract { get; set; }

        [ForeignKey("Vehicle")]
        public int? VehicleId { get; set; }
        public virtual Vehicle? Vehicle { get; set; }

        public string WayBillNumber { get; set; }
        public SiloLoad() { }
    }

    #endregion

    #region Vehicle

    public class Vehicle : BaseClass
    {
        [Key]
        public int Id { get; set; }
        public string RegistrationNumber { get; set; }
        public string Make { get; set; }

        public Vehicle() { }
    }

    #endregion

    #region Product

    public class Product : BaseClass
    {
        [Key]
        public int Id { get; set; }
        public string ProductName { get; set; }
        public ProductCategory ProductCategory { get; set; }
        public string ProductGrading { get; set; }

        public Product() { }

    }

    #endregion

    #region Customer

    public class Customer : BaseClass
    {
        [Key]
        public int Id { get; set; }
        public string CustomerName { get; set; }

        public Customer() { }
    }

    #endregion

    #region Contract

    public class Contract : BaseClass
    {
        [Key]
        public int Id { get; set; }
        public string ContractNumber { get; set; }
        public double MaxTonnages { get; set; }
        [ForeignKey("Customer")]
        public int? CustomerId { get; set; }
        public virtual Customer? Customer { get; set; }

        [ForeignKey("Product")]
        public int? ProductId { get; set; }
        public virtual Product? Product { get; set; }

        public Contract() { }

    }


    #endregion

    #region Settings

    public class Settings : BaseClass
    {
        [Key]
        public int Id { get; set; }
        public string Name { get; set; }
        public string Value { get; set; }

        public Settings() { }
    }

    #endregion
}

