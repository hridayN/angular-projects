using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data.SqlClient;
using System.Linq;
using System.Web;

namespace Authentication.API.Core
{
    public class DbHelperService
    {
        public static SqlConnection GetConnection()
        {
            return (new SqlConnection(ConfigurationManager.AppSettings["EmployeeDB"]));
        }
    }
}