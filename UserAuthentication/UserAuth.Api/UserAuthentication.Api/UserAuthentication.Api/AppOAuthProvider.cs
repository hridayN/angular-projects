using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using System.Web;
using Microsoft.Owin.Security;
using Microsoft.Owin.Security.OAuth;
using UserAuthentication.Api.Interfaces;
using UserAuthentication.Api.Services;

namespace UserAuthentication.Api
{
    public class AppOAuthProvider: OAuthAuthorizationServerProvider
    {
        public override async Task ValidateClientAuthentication(OAuthValidateClientAuthenticationContext context) {
            context.Validated();
        }

        // Authenticate user based on credentials
        public override async Task GrantResourceOwnerCredentials(OAuthGrantResourceOwnerCredentialsContext context) {
            var user = GetUserDbService().FindUser(context.UserName, context.Password);

            if (user != null)
            {
                var identity = new ClaimsIdentity(context.Options.AuthenticationType);
                identity.AddClaim(new Claim("Username", user.userName));
                identity.AddClaim(new Claim("Email", user.email));
                identity.AddClaim(new Claim("LoggenOn", DateTime.Now.ToString()));
                context.Validated(identity);
            } else return;
        }

        private ILoginService GetUserDbService()
        {
            ILoginService loginService = new LoginService();
            return loginService;
        }
    }
}