using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace WBP.Migrations
{
    /// <inheritdoc />
    public partial class ChangeToDecimal : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<decimal>(
                name: "SpaceAvailable",
                table: "Silos",
                type: "TEXT",
                nullable: false,
                oldClrType: typeof(double),
                oldType: "REAL");

            migrationBuilder.AlterColumn<decimal>(
                name: "CurrentMeasurement",
                table: "Silos",
                type: "TEXT",
                nullable: false,
                oldClrType: typeof(double),
                oldType: "REAL");

            migrationBuilder.AlterColumn<decimal>(
                name: "Capacity",
                table: "Silos",
                type: "TEXT",
                nullable: false,
                oldClrType: typeof(double),
                oldType: "REAL");

            migrationBuilder.AlterColumn<decimal>(
                name: "TotalWeigth",
                table: "SiloLoads",
                type: "TEXT",
                nullable: false,
                oldClrType: typeof(double),
                oldType: "REAL");

            migrationBuilder.AlterColumn<decimal>(
                name: "SecondWeight",
                table: "SiloLoads",
                type: "TEXT",
                nullable: false,
                oldClrType: typeof(double),
                oldType: "REAL");

            migrationBuilder.AlterColumn<decimal>(
                name: "FirstWeight",
                table: "SiloLoads",
                type: "TEXT",
                nullable: false,
                oldClrType: typeof(double),
                oldType: "REAL");

            migrationBuilder.UpdateData(
                table: "Silos",
                keyColumn: "Id",
                keyValue: 1,
                columns: new[] { "Capacity", "Created", "CurrentMeasurement", "SpaceAvailable" },
                values: new object[] { 1000m, new DateTime(2024, 2, 21, 11, 38, 0, 277, DateTimeKind.Local).AddTicks(3138), 0m, 1000m });

            migrationBuilder.UpdateData(
                table: "Silos",
                keyColumn: "Id",
                keyValue: 2,
                columns: new[] { "Capacity", "Created", "CurrentMeasurement", "SpaceAvailable" },
                values: new object[] { 1000m, new DateTime(2024, 2, 21, 11, 38, 0, 277, DateTimeKind.Local).AddTicks(3159), 0m, 1000m });

            migrationBuilder.UpdateData(
                table: "Silos",
                keyColumn: "Id",
                keyValue: 3,
                columns: new[] { "Capacity", "Created", "CurrentMeasurement", "SpaceAvailable" },
                values: new object[] { 1000m, new DateTime(2024, 2, 21, 11, 38, 0, 277, DateTimeKind.Local).AddTicks(3163), 0m, 1000m });

            migrationBuilder.UpdateData(
                table: "Silos",
                keyColumn: "Id",
                keyValue: 4,
                columns: new[] { "Capacity", "Created", "CurrentMeasurement", "SpaceAvailable" },
                values: new object[] { 1000m, new DateTime(2024, 2, 21, 11, 38, 0, 277, DateTimeKind.Local).AddTicks(3166), 0m, 1000m });

            migrationBuilder.UpdateData(
                table: "Silos",
                keyColumn: "Id",
                keyValue: 5,
                columns: new[] { "Capacity", "Created", "CurrentMeasurement", "SpaceAvailable" },
                values: new object[] { 1000m, new DateTime(2024, 2, 21, 11, 38, 0, 277, DateTimeKind.Local).AddTicks(3168), 0m, 1000m });

            migrationBuilder.UpdateData(
                table: "Silos",
                keyColumn: "Id",
                keyValue: 6,
                columns: new[] { "Capacity", "Created", "CurrentMeasurement", "SpaceAvailable" },
                values: new object[] { 1000m, new DateTime(2024, 2, 21, 11, 38, 0, 277, DateTimeKind.Local).AddTicks(3171), 0m, 1000m });

            migrationBuilder.UpdateData(
                table: "Silos",
                keyColumn: "Id",
                keyValue: 7,
                columns: new[] { "Capacity", "Created", "CurrentMeasurement", "SpaceAvailable" },
                values: new object[] { 1000m, new DateTime(2024, 2, 21, 11, 38, 0, 277, DateTimeKind.Local).AddTicks(3173), 0m, 1000m });

            migrationBuilder.UpdateData(
                table: "Silos",
                keyColumn: "Id",
                keyValue: 8,
                columns: new[] { "Capacity", "Created", "CurrentMeasurement", "SpaceAvailable" },
                values: new object[] { 1000m, new DateTime(2024, 2, 21, 11, 38, 0, 277, DateTimeKind.Local).AddTicks(3176), 0m, 1000m });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<double>(
                name: "SpaceAvailable",
                table: "Silos",
                type: "REAL",
                nullable: false,
                oldClrType: typeof(decimal),
                oldType: "TEXT");

            migrationBuilder.AlterColumn<double>(
                name: "CurrentMeasurement",
                table: "Silos",
                type: "REAL",
                nullable: false,
                oldClrType: typeof(decimal),
                oldType: "TEXT");

            migrationBuilder.AlterColumn<double>(
                name: "Capacity",
                table: "Silos",
                type: "REAL",
                nullable: false,
                oldClrType: typeof(decimal),
                oldType: "TEXT");

            migrationBuilder.AlterColumn<double>(
                name: "TotalWeigth",
                table: "SiloLoads",
                type: "REAL",
                nullable: false,
                oldClrType: typeof(decimal),
                oldType: "TEXT");

            migrationBuilder.AlterColumn<double>(
                name: "SecondWeight",
                table: "SiloLoads",
                type: "REAL",
                nullable: false,
                oldClrType: typeof(decimal),
                oldType: "TEXT");

            migrationBuilder.AlterColumn<double>(
                name: "FirstWeight",
                table: "SiloLoads",
                type: "REAL",
                nullable: false,
                oldClrType: typeof(decimal),
                oldType: "TEXT");

            migrationBuilder.UpdateData(
                table: "Silos",
                keyColumn: "Id",
                keyValue: 1,
                columns: new[] { "Capacity", "Created", "CurrentMeasurement", "SpaceAvailable" },
                values: new object[] { 1000.0, new DateTime(2024, 2, 19, 22, 21, 7, 826, DateTimeKind.Local).AddTicks(9116), 0.0, 1000.0 });

            migrationBuilder.UpdateData(
                table: "Silos",
                keyColumn: "Id",
                keyValue: 2,
                columns: new[] { "Capacity", "Created", "CurrentMeasurement", "SpaceAvailable" },
                values: new object[] { 1000.0, new DateTime(2024, 2, 19, 22, 21, 7, 826, DateTimeKind.Local).AddTicks(9137), 0.0, 1000.0 });

            migrationBuilder.UpdateData(
                table: "Silos",
                keyColumn: "Id",
                keyValue: 3,
                columns: new[] { "Capacity", "Created", "CurrentMeasurement", "SpaceAvailable" },
                values: new object[] { 1000.0, new DateTime(2024, 2, 19, 22, 21, 7, 826, DateTimeKind.Local).AddTicks(9141), 0.0, 1000.0 });

            migrationBuilder.UpdateData(
                table: "Silos",
                keyColumn: "Id",
                keyValue: 4,
                columns: new[] { "Capacity", "Created", "CurrentMeasurement", "SpaceAvailable" },
                values: new object[] { 1000.0, new DateTime(2024, 2, 19, 22, 21, 7, 826, DateTimeKind.Local).AddTicks(9144), 0.0, 1000.0 });

            migrationBuilder.UpdateData(
                table: "Silos",
                keyColumn: "Id",
                keyValue: 5,
                columns: new[] { "Capacity", "Created", "CurrentMeasurement", "SpaceAvailable" },
                values: new object[] { 1000.0, new DateTime(2024, 2, 19, 22, 21, 7, 826, DateTimeKind.Local).AddTicks(9147), 0.0, 1000.0 });

            migrationBuilder.UpdateData(
                table: "Silos",
                keyColumn: "Id",
                keyValue: 6,
                columns: new[] { "Capacity", "Created", "CurrentMeasurement", "SpaceAvailable" },
                values: new object[] { 1000.0, new DateTime(2024, 2, 19, 22, 21, 7, 826, DateTimeKind.Local).AddTicks(9150), 0.0, 1000.0 });

            migrationBuilder.UpdateData(
                table: "Silos",
                keyColumn: "Id",
                keyValue: 7,
                columns: new[] { "Capacity", "Created", "CurrentMeasurement", "SpaceAvailable" },
                values: new object[] { 1000.0, new DateTime(2024, 2, 19, 22, 21, 7, 826, DateTimeKind.Local).AddTicks(9153), 0.0, 1000.0 });

            migrationBuilder.UpdateData(
                table: "Silos",
                keyColumn: "Id",
                keyValue: 8,
                columns: new[] { "Capacity", "Created", "CurrentMeasurement", "SpaceAvailable" },
                values: new object[] { 1000.0, new DateTime(2024, 2, 19, 22, 21, 7, 826, DateTimeKind.Local).AddTicks(9157), 0.0, 1000.0 });
        }
    }
}
