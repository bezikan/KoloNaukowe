using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace KoloNaukowe.Migrations
{
    public partial class p4 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "tblGroups",
                columns: table => new
                {
                    GroupID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    GroupName = table.Column<string>(unicode: false, maxLength: 60, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_tblGroups", x => x.GroupID);
                });

            migrationBuilder.CreateTable(
                name: "tblStudent",
                columns: table => new
                {
                    StudentID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    FirstName = table.Column<string>(unicode: false, maxLength: 60, nullable: false),
                    LastName = table.Column<string>(unicode: false, maxLength: 60, nullable: false),
                    Email = table.Column<string>(unicode: false, maxLength: 100, nullable: false),
                    GroupName = table.Column<string>(unicode: false, maxLength: 60, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_tblStudent", x => x.StudentID);
                });

            migrationBuilder.InsertData(
                table: "tblGroups",
                columns: new[] { "GroupID", "GroupName" },
                values: new object[,]
                {
                    { 1, "Java" },
                    { 2, "ASP.NET" },
                    { 3, "JavaScript" },
                    { 4, "Golang" },
                    { 5, "Machine Learning" },
                    { 6, "Robotyka" }
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "tblGroups");

            migrationBuilder.DropTable(
                name: "tblStudent");
        }
    }
}
