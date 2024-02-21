﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using WBP;

#nullable disable

namespace WBP.Migrations
{
    [DbContext(typeof(WBContext))]
    [Migration("20240219202111_waybill")]
    partial class waybill
    {
        /// <inheritdoc />
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder.HasAnnotation("ProductVersion", "8.0.1");

            modelBuilder.Entity("WBP.Entities.Contract", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<bool>("Archived")
                        .HasColumnType("INTEGER");

                    b.Property<string>("ContractNumber")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<DateTime>("Created")
                        .HasColumnType("TEXT");

                    b.Property<int?>("CustomerId")
                        .HasColumnType("INTEGER");

                    b.Property<double>("MaxTonnages")
                        .HasColumnType("REAL");

                    b.Property<DateTime?>("Modified")
                        .HasColumnType("TEXT");

                    b.Property<int?>("ProductId")
                        .HasColumnType("INTEGER");

                    b.HasKey("Id");

                    b.HasIndex("CustomerId");

                    b.HasIndex("ProductId");

                    b.ToTable("Contracts");
                });

            modelBuilder.Entity("WBP.Entities.Customer", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<bool>("Archived")
                        .HasColumnType("INTEGER");

                    b.Property<DateTime>("Created")
                        .HasColumnType("TEXT");

                    b.Property<string>("CustomerName")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<DateTime?>("Modified")
                        .HasColumnType("TEXT");

                    b.HasKey("Id");

                    b.ToTable("Customers");
                });

            modelBuilder.Entity("WBP.Entities.Product", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<bool>("Archived")
                        .HasColumnType("INTEGER");

                    b.Property<DateTime>("Created")
                        .HasColumnType("TEXT");

                    b.Property<DateTime?>("Modified")
                        .HasColumnType("TEXT");

                    b.Property<int>("ProductCategory")
                        .HasColumnType("INTEGER");

                    b.Property<string>("ProductGrading")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<string>("ProductName")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.HasKey("Id");

                    b.ToTable("Products");
                });

            modelBuilder.Entity("WBP.Entities.Settings", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<bool>("Archived")
                        .HasColumnType("INTEGER");

                    b.Property<DateTime>("Created")
                        .HasColumnType("TEXT");

                    b.Property<DateTime?>("Modified")
                        .HasColumnType("TEXT");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<string>("Value")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.HasKey("Id");

                    b.ToTable("Settings");
                });

            modelBuilder.Entity("WBP.Entities.Silo", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<bool>("Archived")
                        .HasColumnType("INTEGER");

                    b.Property<double>("Capacity")
                        .HasColumnType("REAL");

                    b.Property<DateTime>("Created")
                        .HasColumnType("TEXT");

                    b.Property<double>("CurrentMeasurement")
                        .HasColumnType("REAL");

                    b.Property<string>("FriendlyName")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<DateTime?>("Modified")
                        .HasColumnType("TEXT");

                    b.Property<int>("Number")
                        .HasColumnType("INTEGER");

                    b.Property<int>("PrecentageFull")
                        .HasColumnType("INTEGER");

                    b.Property<int?>("ProductId")
                        .HasColumnType("INTEGER");

                    b.Property<double>("SpaceAvailable")
                        .HasColumnType("REAL");

                    b.HasKey("Id");

                    b.HasIndex("ProductId");

                    b.ToTable("Silos");

                    b.HasData(
                        new
                        {
                            Id = 1,
                            Archived = false,
                            Capacity = 1000.0,
                            Created = new DateTime(2024, 2, 19, 22, 21, 7, 826, DateTimeKind.Local).AddTicks(9116),
                            CurrentMeasurement = 0.0,
                            FriendlyName = "Silo 1",
                            Number = 1,
                            PrecentageFull = 0,
                            SpaceAvailable = 1000.0
                        },
                        new
                        {
                            Id = 2,
                            Archived = false,
                            Capacity = 1000.0,
                            Created = new DateTime(2024, 2, 19, 22, 21, 7, 826, DateTimeKind.Local).AddTicks(9137),
                            CurrentMeasurement = 0.0,
                            FriendlyName = "Silo 2",
                            Number = 2,
                            PrecentageFull = 0,
                            SpaceAvailable = 1000.0
                        },
                        new
                        {
                            Id = 3,
                            Archived = false,
                            Capacity = 1000.0,
                            Created = new DateTime(2024, 2, 19, 22, 21, 7, 826, DateTimeKind.Local).AddTicks(9141),
                            CurrentMeasurement = 0.0,
                            FriendlyName = "Silo 3",
                            Number = 3,
                            PrecentageFull = 0,
                            SpaceAvailable = 1000.0
                        },
                        new
                        {
                            Id = 4,
                            Archived = false,
                            Capacity = 1000.0,
                            Created = new DateTime(2024, 2, 19, 22, 21, 7, 826, DateTimeKind.Local).AddTicks(9144),
                            CurrentMeasurement = 0.0,
                            FriendlyName = "Silo 4",
                            Number = 4,
                            PrecentageFull = 0,
                            SpaceAvailable = 1000.0
                        },
                        new
                        {
                            Id = 5,
                            Archived = false,
                            Capacity = 1000.0,
                            Created = new DateTime(2024, 2, 19, 22, 21, 7, 826, DateTimeKind.Local).AddTicks(9147),
                            CurrentMeasurement = 0.0,
                            FriendlyName = "Silo 5",
                            Number = 5,
                            PrecentageFull = 0,
                            SpaceAvailable = 1000.0
                        },
                        new
                        {
                            Id = 6,
                            Archived = false,
                            Capacity = 1000.0,
                            Created = new DateTime(2024, 2, 19, 22, 21, 7, 826, DateTimeKind.Local).AddTicks(9150),
                            CurrentMeasurement = 0.0,
                            FriendlyName = "Silo 6",
                            Number = 6,
                            PrecentageFull = 0,
                            SpaceAvailable = 1000.0
                        },
                        new
                        {
                            Id = 7,
                            Archived = false,
                            Capacity = 1000.0,
                            Created = new DateTime(2024, 2, 19, 22, 21, 7, 826, DateTimeKind.Local).AddTicks(9153),
                            CurrentMeasurement = 0.0,
                            FriendlyName = "Silo 7",
                            Number = 7,
                            PrecentageFull = 0,
                            SpaceAvailable = 1000.0
                        },
                        new
                        {
                            Id = 8,
                            Archived = false,
                            Capacity = 1000.0,
                            Created = new DateTime(2024, 2, 19, 22, 21, 7, 826, DateTimeKind.Local).AddTicks(9157),
                            CurrentMeasurement = 0.0,
                            FriendlyName = "Silo 8",
                            Number = 8,
                            PrecentageFull = 0,
                            SpaceAvailable = 1000.0
                        });
                });

            modelBuilder.Entity("WBP.Entities.SiloLoad", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<bool>("Archived")
                        .HasColumnType("INTEGER");

                    b.Property<int?>("ContractId")
                        .HasColumnType("INTEGER");

                    b.Property<DateTime>("Created")
                        .HasColumnType("TEXT");

                    b.Property<DateTime?>("FinalizedDate")
                        .HasColumnType("TEXT");

                    b.Property<double>("FirstWeight")
                        .HasColumnType("REAL");

                    b.Property<DateTime?>("FirstWeightDate")
                        .HasColumnType("TEXT");

                    b.Property<bool>("IsFinalized")
                        .HasColumnType("INTEGER");

                    b.Property<string>("LoadType")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<int>("LoadTypeId")
                        .HasColumnType("INTEGER");

                    b.Property<DateTime?>("Modified")
                        .HasColumnType("TEXT");

                    b.Property<int?>("ProductId")
                        .HasColumnType("INTEGER");

                    b.Property<double>("SecondWeight")
                        .HasColumnType("REAL");

                    b.Property<DateTime?>("SecondWeightDate")
                        .HasColumnType("TEXT");

                    b.Property<int?>("SiloId")
                        .HasColumnType("INTEGER");

                    b.Property<double>("TotalWeigth")
                        .HasColumnType("REAL");

                    b.Property<int?>("VehicleId")
                        .HasColumnType("INTEGER");

                    b.Property<string>("WayBillNumber")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.HasKey("Id");

                    b.HasIndex("ContractId");

                    b.HasIndex("ProductId");

                    b.HasIndex("SiloId");

                    b.HasIndex("VehicleId");

                    b.ToTable("SiloLoads");
                });

            modelBuilder.Entity("WBP.Entities.Vehicle", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<bool>("Archived")
                        .HasColumnType("INTEGER");

                    b.Property<DateTime>("Created")
                        .HasColumnType("TEXT");

                    b.Property<string>("Make")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<DateTime?>("Modified")
                        .HasColumnType("TEXT");

                    b.Property<string>("RegistrationNumber")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.HasKey("Id");

                    b.ToTable("Vehicles");
                });

            modelBuilder.Entity("WBP.Entities.Contract", b =>
                {
                    b.HasOne("WBP.Entities.Customer", "Customer")
                        .WithMany()
                        .HasForeignKey("CustomerId");

                    b.HasOne("WBP.Entities.Product", "Product")
                        .WithMany()
                        .HasForeignKey("ProductId");

                    b.Navigation("Customer");

                    b.Navigation("Product");
                });

            modelBuilder.Entity("WBP.Entities.Silo", b =>
                {
                    b.HasOne("WBP.Entities.Product", "Product")
                        .WithMany()
                        .HasForeignKey("ProductId");

                    b.Navigation("Product");
                });

            modelBuilder.Entity("WBP.Entities.SiloLoad", b =>
                {
                    b.HasOne("WBP.Entities.Contract", "Contract")
                        .WithMany()
                        .HasForeignKey("ContractId");

                    b.HasOne("WBP.Entities.Product", "Product")
                        .WithMany()
                        .HasForeignKey("ProductId");

                    b.HasOne("WBP.Entities.Silo", "Silo")
                        .WithMany()
                        .HasForeignKey("SiloId");

                    b.HasOne("WBP.Entities.Vehicle", "Vehicle")
                        .WithMany()
                        .HasForeignKey("VehicleId");

                    b.Navigation("Contract");

                    b.Navigation("Product");

                    b.Navigation("Silo");

                    b.Navigation("Vehicle");
                });
#pragma warning restore 612, 618
        }
    }
}
