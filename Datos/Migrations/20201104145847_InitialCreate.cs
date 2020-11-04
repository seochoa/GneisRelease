using Microsoft.EntityFrameworkCore.Migrations;

namespace Datos.Migrations
{
    public partial class InitialCreate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Habitaciones",
                columns: table => new
                {
                    Idhabitacion = table.Column<string>(type: "nvarchar(20)", nullable: false),
                    Tipo = table.Column<string>(type: "nvarchar(15)", nullable: true),
                    Costo = table.Column<decimal>(type: "decimal(15,2)", nullable: false),
                    Estado = table.Column<string>(type: "nvarchar(20)", nullable: true),
                    Usos = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Habitaciones", x => x.Idhabitacion);
                });

            migrationBuilder.CreateTable(
                name: "Productos",
                columns: table => new
                {
                    Idproducto = table.Column<string>(type: "nvarchar(20)", nullable: false),
                    Descripcion = table.Column<string>(type: "nvarchar(40)", nullable: true),
                    Stock = table.Column<int>(nullable: false),
                    Vrunitario = table.Column<decimal>(type: "decimal(15,2)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Productos", x => x.Idproducto);
                });

            migrationBuilder.CreateTable(
                name: "Usuarios",
                columns: table => new
                {
                    Iduser = table.Column<string>(type: "nvarchar(20)", nullable: false),
                    Typeuser = table.Column<string>(type: "nvarchar(15)", nullable: true),
                    Password = table.Column<string>(type: "nvarchar(30)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Usuarios", x => x.Iduser);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Habitaciones");

            migrationBuilder.DropTable(
                name: "Productos");

            migrationBuilder.DropTable(
                name: "Usuarios");
        }
    }
}
