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
        public override Task GrantResourceOwnerCredentials(OAuthGrantResourceOwnerCredentialsContext context) {
            var user = GetUserDbService().FindUser(context.UserName, context.Password);

            var identity = new ClaimsIdentity("JWT");
            identity.AddClaim(new Claim(ClaimTypes.Name, user.email));

            var props = new AuthenticationProperties
            (
                new Dictionary<string, string>
                {
                    { "userName", (context.UserName == null) ? string.Empty : context.UserName }
                }
            );

            var ticket = new AuthenticationTicket(identity, props);
            context.Validated(ticket);
            return Task.FromResult<object>(null);
        }

        private ILoginService GetUserDbService()
        {
            ILoginService loginService = new LoginService();
            return loginService;
        }
    }
}