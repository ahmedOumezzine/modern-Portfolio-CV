using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace Portfolio_Cv.Models
{
    public class Header
    {
        public string shortdescript { get; set; }
        public List<string> Imagelist { get; set; }
    }
    
    public class AboutMe
    {
        public string shortdescript { get; set; }
        public List<string> Aboutmelist { get; set; }

    }
    public class cv_education
    {
        public string shortdescript { get; set; }
        public string school { get; set; }
        public string start { get; set; }
        public string end { get; set; }
        public string degree { get; set; }
    }

    public class cv_experience
    {
        public string shortdescript { get; set; }
        public string title { get; set; }
        public string institution { get; set; }
        public string organization { get; set; }
        public string start { get; set; }
        public string end { get; set; }
        public string description { get; set; }
    }

    public class MySkils
    {
        public string shortdescript { get; set; }
        public int Id { get; set; }
        public string title { get; set; }
    }
    public class MyCertification
    {
        public string shortdescript { get; set; }
        public string name { get; set; }
        public string description { get; set; }
        public string year { get; set; }
        public string image { get; set; }
    }
    public class MyWorks
    {
        public string shortdescript { get; set; }
        public string name { get; set; }
        public string description { get; set; }
        public string year { get; set; }
        public string Categories { get; set; }
        public string tags { get; set; }
    }
    public class ContactMe
    {
        public string shortdescript { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public string Phone { get; set; }
        public string Message { get; set; }

    }
}