using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace KoloNaukowe.Models
{
    public class StudentDataAccessLayer
    {
        private readonly StudentsContext db = new StudentsContext();


        public IEnumerable<TblStudent> GetAllStudents()
        {
            try
            {
                return db.TblStudent.ToList();
            }
            catch
            {
                throw;
            }
        }

        //dodanie  studenta
        public int AddStudent(TblStudent student)
        {
            try
            {
                if (db.TblStudent.Find(student.StudentId) != null)
                {
                    throw new Exception("Student istnieje.");
                }
                db.TblStudent.Add(student);
                db.SaveChanges();
                return 1;
            }
            catch
            {
                throw;
            }
        }

        //aktualizacja danych danego studenta 
        public int UpdateStudent(TblStudent student)
        {
            try
            {
               
                db.Entry<TblStudent>(student).State = EntityState.Detached;
                db.Entry<TblStudent>(student).State = EntityState.Modified;
                
                db.SaveChanges();

                return 1;
            }
            catch
            {
                throw;
            }
        }

        //dane poszczególnego studenta
        public TblStudent GetStudentData(int id)
        {
            try
            {
                TblStudent student = db.TblStudent.Find(id);
                //sprawdzenie czy istnieje
                if (student == null)
                {
                    throw new Exception("Student nie istnieje w bazie danych.");
                }
                 return student;
            }
            catch(Exception ex)
            {
                throw ex;
            }
        }

        //usunięcie studenta   
        public int DeleteStudent(int id)
        {
            try
            {

                TblStudent student = db.TblStudent.Find(id);
                if (student == null)
                {
                    throw new Exception("Student nie istnieje w bazie danych.");
                }
                db.TblStudent.Remove(student);
                db.SaveChanges();
                return 1;
            }
            catch
            {
                throw;
            }
        }

        //lista grup - Filtrowanie BD
        public List<TblGroups> GetGroups()
        {
            List<TblGroups> listGroup = new List<TblGroups>();
            listGroup = (from GroupList in db.TblGroups select GroupList).ToList();
            if (listGroup == null)
            {
                throw new Exception("brak danych");
            }
            return listGroup;
        }


    }
}
