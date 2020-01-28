using System.Web.Http.Results;
using System.Web.Http;
using UserAuthentication.Api.Interfaces;
using UserAuthentication.Api.Models;
using UserAuthentication.Api.Services;

namespace UserAuthentication.Api.Controllers
{
    public class AccountController : ApiController
    {
        [Route("api/User/Register")]
        [HttpPost]
        public IHttpActionResult RegisterUser(User user)
        {
            return Ok(UserService().RegisterUser(user));
        }

        private IUserService UserService()
        {
            IUserService userService = new UserService();
            return userService;
        }
    }
}
