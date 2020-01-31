using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Web;
using UserAuthentication.Api.Interfaces;
using UserAuthentication.Api.Models;

namespace UserAuthentication.Api.Services
{
    public class LoginService : ILoginService
    {
        public User FindUser(string email, string password)
        {
            // Get User with supplied email and password
            var parameterList = new List<IDbDataParameter>
            {
                new SqlParameter() { ParameterName = "@Email", Value = email, SqlDbType = SqlDbType.VarChar },
                new SqlParameter() { ParameterName = "@Password", Value = password, SqlDbType = SqlDbType.VarChar }
            };

            SqlDataReader dbSet;
            using (SqlConnection sqlConnection = DbHelperService.GetConnection())
            {
                sqlConnection.Open();
                SqlCommand cmd = new SqlCommand();
                cmd.CommandType = CommandType.StoredProcedure;
                cmd.CommandText = "[dbo].[AddUserAccount]";
                cmd.Parameters.AddRange(parameterList.ToArray());
                cmd.Connection = sqlConnection;
                dbSet = cmd.ExecuteReader();

                //if (dbSet.HasRows)
                //{
                //    User user = new User();
                //    user.
                //}
            }
            return (new User());
        }
    }
}