using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace UserAuthentication.Api.Models
{
    public class User
    {
        public string userName { get; set; }
        public string firstName { get; set; }
        public string lastName { get; set; }
        public string email { get; set; }
        public string password { get; set; }
    }
}