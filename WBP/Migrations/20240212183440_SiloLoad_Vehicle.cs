using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace WBP.Migrations
{
    /// <inheritdoc />
    public partial class SiloLoad_Vehicle : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "VehicleId",
                table: "SiloLoads",
                type: "INTEGER",
                nullable: true);

            migrationBuilder.InsertData(
                table: "Silos",
                columns: new[] { "Id", "Archived", "Capacity", "Created", "CurrentMeasurement", "FriendlyName", "Modified", "Number", "PrecentageFull", "ProductId", "SpaceAvailable" },
                values: new object[,]
                {
                    { 1, false, 1000.0, new DateTime(2024, 2, 12, 20, 34, 39, 101, DateTimeKind.Local).AddTicks(7354), 0.0, "Silo 1", null, 1, 0, null, 1000.0 },
                    { 2, false, 1000.0, new DateTime(2024, 2, 12, 20, 34, 39, 101, DateTimeKind.Local).AddTicks(7376), 0.0, "Silo 2", null, 2, 0, null, 1000.0 },
                    { 3, false, 1000.0, new DateTime(2024, 2, 12, 20, 34, 39, 101, DateTimeKind.Local).AddTicks(7379), 0.0, "Silo 3", null, 3, 0, null, 1000.0 },
                    { 4, false, 1000.0, new DateTime(2024, 2, 12, 20, 34, 39, 101, DateTimeKind.Local).AddTicks(7382), 0.0, "Silo 4", null, 4, 0, null, 1000.0 },
                    { 5, false, 1000.0, new DateTime(2024, 2, 12, 20, 34, 39, 101, DateTimeKind.Local).AddTicks(7384), 0.0, "Silo 5", null, 5, 0, null, 1000.0 },
                    { 6, false, 1000.0, new DateTime(2024, 2, 12, 20, 34, 39, 101, DateTimeKind.Local).AddTicks(7386), 0.0, "Silo 6", null, 6, 0, null, 1000.0 },
                    { 7, false, 1000.0, new DateTime(2024, 2, 12, 20, 34, 39, 101, DateTimeKind.Local).AddTicks(7389), 0.0, "Silo 7", null, 7, 0, null, 1000.0 },
                    { 8, false, 1000.0, new DateTime(2024, 2, 12, 20, 34, 39, 101, DateTimeKind.Local).AddTicks(7392), 0.0, "Silo 8", null, 8, 0, null, 1000.0 }
                });

            migrationBuilder.CreateIndex(
                name: "IX_SiloLoads_VehicleId",
                table: "SiloLoads",
                column: "VehicleId");

            migrationBuilder.AddForeignKey(
                name: "FK_SiloLoads_Vehicles_VehicleId",
                table: "SiloLoads",
                column: "VehicleId",
                principalTable: "Vehicles",
                principalColumn: "Id");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_SiloLoads_Vehicles_VehicleId",
                table: "SiloLoads");

            migrationBuilder.DropIndex(
                name: "IX_SiloLoads_VehicleId",
                table: "SiloLoads");

            migrationBuilder.DeleteData(
                table: "Silos",
                keyColumn: "Id",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "Silos",
                keyColumn: "Id",
                keyValue: 2);

            migrationBuilder.DeleteData(
                table: "Silos",
                keyColumn: "Id",
                keyValue: 3);

            migrationBuilder.DeleteData(
                table: "Silos",
                keyColumn: "Id",
                keyValue: 4);

            migrationBuilder.DeleteData(
                table: "Silos",
                keyColumn: "Id",
                keyValue: 5);

            migrationBuilder.DeleteData(
                table: "Silos",
                keyColumn: "Id",
                keyValue: 6);

            migrationBuilder.DeleteData(
                table: "Silos",
                keyColumn: "Id",
                keyValue: 7);

            migrationBuilder.DeleteData(
                table: "Silos",
                keyColumn: "Id",
                keyValue: 8);

            migrationBuilder.DropColumn(
                name: "VehicleId",
                table: "SiloLoads");
        }
    }
}
