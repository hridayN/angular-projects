using Authentication.API.Core;
using Authentication.API.Domain;
using Newtonsoft.Json.Serialization;
using Owin;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Net.Http.Formatting;
using System.Web.Http;

namespace Authentication.API
{
    public class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            var parameterList = new List<IDbDataParameter>
            {
                new SqlParameter() { ParameterName = "@Email", Value = "hn@gmail.com", SqlDbType = SqlDbType.VarChar },
                new SqlParameter() { ParameterName = "@Password", Value = "1234", SqlDbType = SqlDbType.VarChar }
            };

            User user = new User();

            using (SqlConnection sqlConnection = DbHelperService.GetConnection())
            {
                sqlConnection.Open();
                SqlCommand cmd = new SqlCommand();
                cmd.CommandType = CommandType.StoredProcedure;
                cmd.CommandText = "[dbo].[ValidateUser]";
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

            HttpConfiguration config = new HttpConfiguration();

            ConfigureOAuthTokenGeneration(app);

            ConfigureWebApi(config);
        }

        private void ConfigureOAuthTokenGeneration(IAppBuilder app)
        {

        }

        private void ConfigureWebApi(HttpConfiguration config)
        {
            config.MapHttpAttributeRoutes();

            var jsonFormatter = config.Formatters.OfType<JsonMediaTypeFormatter>().First();
            jsonFormatter.SerializerSettings.ContractResolver = new CamelCasePropertyNamesContractResolver();
        }
    }
}