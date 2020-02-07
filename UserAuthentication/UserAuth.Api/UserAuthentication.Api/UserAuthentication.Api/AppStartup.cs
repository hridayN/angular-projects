using System;
using Microsoft.Owin;
using Microsoft.Owin.Cors;
using Microsoft.Owin.Security.OAuth;
using Owin;
using System.Web.Http;
using System.Data.SqlClient;
using UserAuthentication.Api.Services;
using System.Data;
using System.Collections.Generic;
using UserAuthentication.Api.Models;

[assembly: OwinStartup(typeof(UserAuthentication.Api.AppStartup))]

namespace UserAuthentication.Api
{
    public class AppStartup
    {
        public void Configuration(IAppBuilder app)
        {
            // For more information on how to configure your application, visit https://go.microsoft.com/fwlink/?LinkID=316888

            app.UseCors(CorsOptions.AllowAll);

            OAuthAuthorizationServerOptions options = new OAuthAuthorizationServerOptions
            {
                TokenEndpointPath = new PathString("/token"),
                Provider = new AppOAuthProvider(),
                AccessTokenExpireTimeSpan = TimeSpan.FromMinutes(10),
                AllowInsecureHttp = true
            };

            app.UseOAuthAuthorizationServer(options);

            HttpConfiguration config = new HttpConfiguration();
            app.UseWebApi(config);
        }
    }
}