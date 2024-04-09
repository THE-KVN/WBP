using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace WBP.Migrations
{
    /// <inheritdoc />
    public partial class SiloType : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "SiloType",
                table: "Silos",
                type: "INTEGER",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.UpdateData(
                table: "Silos",
                keyColumn: "Id",
                keyValue: 1,
                columns: new[] { "Created", "SiloType" },
                values: new object[] { new DateTime(2024, 4, 9, 5, 40, 56, 935, DateTimeKind.Local).AddTicks(6417), 0 });

            migrationBuilder.UpdateData(
                table: "Silos",
                keyColumn: "Id",
                keyValue: 2,
                columns: new[] { "Created", "SiloType" },
                values: new object[] { new DateTime(2024, 4, 9, 5, 40, 56, 935, DateTimeKind.Local).AddTicks(6434), 0 });

            migrationBuilder.UpdateData(
                table: "Silos",
                keyColumn: "Id",
                keyValue: 3,
                columns: new[] { "Created", "SiloType" },
                values: new object[] { new DateTime(2024, 4, 9, 5, 40, 56, 935, DateTimeKind.Local).AddTicks(6436), 0 });

            migrationBuilder.UpdateData(
                table: "Silos",
                keyColumn: "Id",
                keyValue: 4,
                columns: new[] { "Created", "SiloType" },
                values: new object[] { new DateTime(2024, 4, 9, 5, 40, 56, 935, DateTimeKind.Local).AddTicks(6438), 0 });

            migrationBuilder.UpdateData(
                table: "Silos",
                keyColumn: "Id",
                keyValue: 5,
                columns: new[] { "Created", "SiloType" },
                values: new object[] { new DateTime(2024, 4, 9, 5, 40, 56, 935, DateTimeKind.Local).AddTicks(6439), 0 });

            migrationBuilder.UpdateData(
                table: "Silos",
                keyColumn: "Id",
                keyValue: 6,
                columns: new[] { "Created", "SiloType" },
                values: new object[] { new DateTime(2024, 4, 9, 5, 40, 56, 935, DateTimeKind.Local).AddTicks(6441), 0 });

            migrationBuilder.UpdateData(
                table: "Silos",
                keyColumn: "Id",
                keyValue: 7,
                columns: new[] { "Created", "SiloType" },
                values: new object[] { new DateTime(2024, 4, 9, 5, 40, 56, 935, DateTimeKind.Local).AddTicks(6442), 0 });

            migrationBuilder.UpdateData(
                table: "Silos",
                keyColumn: "Id",
                keyValue: 8,
                columns: new[] { "Created", "SiloType" },
                values: new object[] { new DateTime(2024, 4, 9, 5, 40, 56, 935, DateTimeKind.Local).AddTicks(6444), 0 });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "SiloType",
                table: "Silos");

            migrationBuilder.UpdateData(
                table: "Silos",
                keyColumn: "Id",
                keyValue: 1,
                column: "Created",
                value: new DateTime(2024, 2, 21, 11, 38, 0, 277, DateTimeKind.Local).AddTicks(3138));

            migrationBuilder.UpdateData(
                table: "Silos",
                keyColumn: "Id",
                keyValue: 2,
                column: "Created",
                value: new DateTime(2024, 2, 21, 11, 38, 0, 277, DateTimeKind.Local).AddTicks(3159));

            migrationBuilder.UpdateData(
                table: "Silos",
                keyColumn: "Id",
                keyValue: 3,
                column: "Created",
                value: new DateTime(2024, 2, 21, 11, 38, 0, 277, DateTimeKind.Local).AddTicks(3163));

            migrationBuilder.UpdateData(
                table: "Silos",
                keyColumn: "Id",
                keyValue: 4,
                column: "Created",
                value: new DateTime(2024, 2, 21, 11, 38, 0, 277, DateTimeKind.Local).AddTicks(3166));

            migrationBuilder.UpdateData(
                table: "Silos",
                keyColumn: "Id",
                keyValue: 5,
                column: "Created",
                value: new DateTime(2024, 2, 21, 11, 38, 0, 277, DateTimeKind.Local).AddTicks(3168));

            migrationBuilder.UpdateData(
                table: "Silos",
                keyColumn: "Id",
                keyValue: 6,
                column: "Created",
                value: new DateTime(2024, 2, 21, 11, 38, 0, 277, DateTimeKind.Local).AddTicks(3171));

            migrationBuilder.UpdateData(
                table: "Silos",
                keyColumn: "Id",
                keyValue: 7,
                column: "Created",
                value: new DateTime(2024, 2, 21, 11, 38, 0, 277, DateTimeKind.Local).AddTicks(3173));

            migrationBuilder.UpdateData(
                table: "Silos",
                keyColumn: "Id",
                keyValue: 8,
                column: "Created",
                value: new DateTime(2024, 2, 21, 11, 38, 0, 277, DateTimeKind.Local).AddTicks(3176));
        }
    }
}
