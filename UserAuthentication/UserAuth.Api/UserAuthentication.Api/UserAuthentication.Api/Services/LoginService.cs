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

            User user = new User();

            using (SqlConnection sqlConnection = DbHelperService.GetConnection())
            {
                sqlConnection.Open();
                SqlCommand cmd = new SqlCommand();
                cmd.CommandType = CommandType.StoredProcedure;
                cmd.CommandText = "[dbo].[AddUserAccount]";
                cmd.Parameters.AddRange(parameterList.ToArray());
                cmd.Connection = sqlConnection;

                SqlDataAdapter dataAdapter = new SqlDataAdapter(cmd);
                DataSet dataSet = new DataSet();
                dataAdapter.Fill(dataSet);

                if (dataSet != null && dataSet.Tables.Count > 0)
                {
                    user.userName = dataSet.Tables[0].Rows[0]["userName"].ToString();
                    user.firstName = dataSet.Tables[0].Rows[0]["firstName"].ToString();
                    user.lastName = dataSet.Tables[0].Rows[0]["lastName"].ToString();
                    user.email = dataSet.Tables[0].Rows[0]["email"].ToString();
                }
            }
            return user;
        }
    }
}