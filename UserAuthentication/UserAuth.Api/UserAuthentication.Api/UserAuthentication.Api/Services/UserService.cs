using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Web;
using UserAuthentication.Api.Interfaces;
using UserAuthentication.Api.Models;

namespace UserAuthentication.Api.Services
{
    public class UserService : IUserService
    {
        public List<string> RegisterUser(User user)
        {
            List<string> list = new List<string>();
            var parameterList = new List<IDbDataParameter>
            {
                new SqlParameter() { ParameterName = "@UserName", Value = user.userName, SqlDbType = SqlDbType.VarChar },
                new SqlParameter() { ParameterName = "@Email", Value = user.email, SqlDbType = SqlDbType.VarChar },
                new SqlParameter() { ParameterName = "@Password", Value = user.password, SqlDbType = SqlDbType.VarChar }
            };

            using (SqlConnection sqlConnection = DbHelperService.GetConnection())
            {
                sqlConnection.Open();
                SqlCommand cmd = new SqlCommand();
                cmd.CommandType = CommandType.StoredProcedure;
                cmd.CommandText = "[dbo].[AddUserAccount]";
                cmd.Parameters.AddRange(parameterList.ToArray());
                cmd.Connection = sqlConnection;
                cmd.ExecuteNonQuery();
            }
            list.Add("User Registered");
            return list;
        }
    }
}