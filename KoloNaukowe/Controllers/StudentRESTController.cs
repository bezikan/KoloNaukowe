using KoloNaukowe.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace KoloNaukowe.Controllers
{
    //REST - metody HTTP
    public class StudentRESTController : Controller
    {
        StudentsContext db = new StudentsContext();

        [HttpGet]
        [Route("api/Students/All")]
        public ObjectResult Index()
        {
            

            if (db.TblStudent.ToList() == null)
            {
                throw new Exception("Brak studentów");
            }

            return Ok(db.TblStudent.ToList());
        }

        //pobranie odpowiedzi http w formie pliku txt
        [HttpGet]
        [Route("api/Students/All/File")]
        public ObjectResult Download()
        {
            try
            {
                var wc = new System.Net.WebClient();
                wc.DownloadFile("https://localhost:" + Request.Host.Port + "/api/Students/All", @"dane.txt");
                System.Diagnostics.Process.Start(@"cmd.exe ", @"/c dane.txt");
            }
            catch (Exception ex)
            {
                BadRequest(ex.Message);
            }

            return Ok("Plik z danymi został wygenerowny.");
        }




        [HttpGet]
        [Route("api/Students/{id}")]
        public ObjectResult Details(int id)
        {
            try
            {
                TblStudent student = db.TblStudent.Find(id);
                if (student != null)
                    return Ok(student);
                else
                    throw new Exception("Student o danym id nie istnieje.");
            }
            //wszystkie inne wyjatki
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        //lista grup - Filtrowanie BD
        [HttpGet]
        [Route("api/Groups")]
        public ObjectResult GetGroups()
        {
            try
            {
                List<TblGroups> listGroup = new List<TblGroups>();
                listGroup = (from GroupList in db.TblGroups select GroupList).ToList();
                if (listGroup == null)
                {
                    throw new Exception("brak danych");
                }

                return Ok(listGroup);
            }
            catch(Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPost]
        [Route("api/Students/Create")]
        public ObjectResult Create(TblStudent student)
        {
            try
            {
                TblStudent st = db.TblStudent.Single(s => s.StudentId.Equals(student.StudentId));
                if (st == null)
                {
                    db.TblStudent.Add(student);
                    db.SaveChanges();
                    return Ok("Dodano studenta");
                }
                else
                {
                    throw new Exception("Student istnieje w bazie danych.");
                }

            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

       



       
    }
}
