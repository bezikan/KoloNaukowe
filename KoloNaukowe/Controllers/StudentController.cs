using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using KoloNaukowe.Models;
using Microsoft.AspNetCore.Mvc;


namespace KoloNaukowe.Controllers
{
    //Controller REST API dla Frontend 
    public class StudentController : Controller
    {
        StudentDataAccessLayer objStudent = new StudentDataAccessLayer();

        [HttpGet]
        [Route("api/Student/All")]
        public IEnumerable<TblStudent> Index()
        {
            return objStudent.GetAllStudents();
        }

        [HttpPost]
        [Route("api/Student/Create")]
        public int Create(TblStudent student)
        {
            return objStudent.AddStudent(student);
        }

        [HttpGet]
        [Route("api/Student/{id}")]
        public TblStudent Details(int id)
        {
            return objStudent.GetStudentData(id);
        }

        [HttpPut]
        [Route("api/Student/Edit")]
        public int Edit(TblStudent student)
        {
            return objStudent.UpdateStudent(student);
        }

        [HttpDelete]
        [Route("api/Student/Delete/{id}")]
        public int Delete(int id)
        {
            return objStudent.DeleteStudent(id);
        }

        [HttpGet]
        [Route("api/Student/GetGroupList")]
        public IEnumerable<TblGroups> Details()
        {
            return objStudent.GetGroups();
        }
    }
}
