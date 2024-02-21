using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace WBP.Migrations
{
    /// <inheritdoc />
    public partial class waybill : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "WayBillNumber",
                table: "SiloLoads",
                type: "TEXT",
                nullable: false,
                defaultValue: "");

            migrationBuilder.UpdateData(
                table: "Silos",
                keyColumn: "Id",
                keyValue: 1,
                column: "Created",
                value: new DateTime(2024, 2, 19, 22, 21, 7, 826, DateTimeKind.Local).AddTicks(9116));

            migrationBuilder.UpdateData(
                table: "Silos",
                keyColumn: "Id",
                keyValue: 2,
                column: "Created",
                value: new DateTime(2024, 2, 19, 22, 21, 7, 826, DateTimeKind.Local).AddTicks(9137));

            migrationBuilder.UpdateData(
                table: "Silos",
                keyColumn: "Id",
                keyValue: 3,
                column: "Created",
                value: new DateTime(2024, 2, 19, 22, 21, 7, 826, DateTimeKind.Local).AddTicks(9141));

            migrationBuilder.UpdateData(
                table: "Silos",
                keyColumn: "Id",
                keyValue: 4,
                column: "Created",
                value: new DateTime(2024, 2, 19, 22, 21, 7, 826, DateTimeKind.Local).AddTicks(9144));

            migrationBuilder.UpdateData(
                table: "Silos",
                keyColumn: "Id",
                keyValue: 5,
                column: "Created",
                value: new DateTime(2024, 2, 19, 22, 21, 7, 826, DateTimeKind.Local).AddTicks(9147));

            migrationBuilder.UpdateData(
                table: "Silos",
                keyColumn: "Id",
                keyValue: 6,
                column: "Created",
                value: new DateTime(2024, 2, 19, 22, 21, 7, 826, DateTimeKind.Local).AddTicks(9150));

            migrationBuilder.UpdateData(
                table: "Silos",
                keyColumn: "Id",
                keyValue: 7,
                column: "Created",
                value: new DateTime(2024, 2, 19, 22, 21, 7, 826, DateTimeKind.Local).AddTicks(9153));

            migrationBuilder.UpdateData(
                table: "Silos",
                keyColumn: "Id",
                keyValue: 8,
                column: "Created",
                value: new DateTime(2024, 2, 19, 22, 21, 7, 826, DateTimeKind.Local).AddTicks(9157));
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "WayBillNumber",
                table: "SiloLoads");

            migrationBuilder.UpdateData(
                table: "Silos",
                keyColumn: "Id",
                keyValue: 1,
                column: "Created",
                value: new DateTime(2024, 2, 12, 20, 34, 39, 101, DateTimeKind.Local).AddTicks(7354));

            migrationBuilder.UpdateData(
                table: "Silos",
                keyColumn: "Id",
                keyValue: 2,
                column: "Created",
                value: new DateTime(2024, 2, 12, 20, 34, 39, 101, DateTimeKind.Local).AddTicks(7376));

            migrationBuilder.UpdateData(
                table: "Silos",
                keyColumn: "Id",
                keyValue: 3,
                column: "Created",
                value: new DateTime(2024, 2, 12, 20, 34, 39, 101, DateTimeKind.Local).AddTicks(7379));

            migrationBuilder.UpdateData(
                table: "Silos",
                keyColumn: "Id",
                keyValue: 4,
                column: "Created",
                value: new DateTime(2024, 2, 12, 20, 34, 39, 101, DateTimeKind.Local).AddTicks(7382));

            migrationBuilder.UpdateData(
                table: "Silos",
                keyColumn: "Id",
                keyValue: 5,
                column: "Created",
                value: new DateTime(2024, 2, 12, 20, 34, 39, 101, DateTimeKind.Local).AddTicks(7384));

            migrationBuilder.UpdateData(
                table: "Silos",
                keyColumn: "Id",
                keyValue: 6,
                column: "Created",
                value: new DateTime(2024, 2, 12, 20, 34, 39, 101, DateTimeKind.Local).AddTicks(7386));

            migrationBuilder.UpdateData(
                table: "Silos",
                keyColumn: "Id",
                keyValue: 7,
                column: "Created",
                value: new DateTime(2024, 2, 12, 20, 34, 39, 101, DateTimeKind.Local).AddTicks(7389));

            migrationBuilder.UpdateData(
                table: "Silos",
                keyColumn: "Id",
                keyValue: 8,
                column: "Created",
                value: new DateTime(2024, 2, 12, 20, 34, 39, 101, DateTimeKind.Local).AddTicks(7392));
        }
    }
}
