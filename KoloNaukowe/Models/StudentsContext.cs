using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace KoloNaukowe.Models
{
    public partial class StudentsContext : DbContext
    {
        public StudentsContext()
        {
        }

        public StudentsContext(DbContextOptions<StudentsContext> options)
            : base(options)
        {
        }

        public virtual DbSet<TblGroups> TblGroups { get; set; }
        public virtual DbSet<TblStudent> TblStudent { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                optionsBuilder.UseSqlServer("Data Source=(localdb)\\MSSQLLocalDB;Initial Catalog=master;Integrated Security=True;Connect Timeout=30;Encrypt=False;TrustServerCertificate=False;ApplicationIntent=ReadWrite;MultiSubnetFailover=False");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<TblGroups>(entity =>
            {
                entity.HasKey(e => e.GroupId);

                entity.ToTable("tblGroups");

                entity.Property(e => e.GroupId).HasColumnName("GroupID");

                entity.Property(e => e.GroupName)
                    .IsRequired()
                    .HasMaxLength(60)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<TblStudent>(entity =>
            {
                entity.HasKey(e => e.StudentId);

                entity.ToTable("tblStudent");

                entity.Property(e => e.StudentId).HasColumnName("StudentID");

                entity.Property(e => e.Email)
                    .IsRequired()
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.FirstName)
                    .IsRequired()
                    .HasMaxLength(60)
                    .IsUnicode(false);

                entity.Property(e => e.GroupName)
                    .IsRequired()
                    .HasMaxLength(60)
                    .IsUnicode(false);

                entity.Property(e => e.LastName)
                    .IsRequired()
                    .HasMaxLength(60)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<TblGroups>().HasData(new TblGroups { GroupId = 1, GroupName="Java" });
            modelBuilder.Entity<TblGroups>().HasData(new TblGroups { GroupId = 2, GroupName = "ASP.NET" });
            modelBuilder.Entity<TblGroups>().HasData(new TblGroups { GroupId = 3, GroupName = "JavaScript" });
            modelBuilder.Entity<TblGroups>().HasData(new TblGroups { GroupId = 4, GroupName = "Golang" });
            modelBuilder.Entity<TblGroups>().HasData(new TblGroups { GroupId = 5, GroupName = "Machine Learning" });
            modelBuilder.Entity<TblGroups>().HasData(new TblGroups { GroupId = 6, GroupName = "Robotyka" });



        }
    }
}
