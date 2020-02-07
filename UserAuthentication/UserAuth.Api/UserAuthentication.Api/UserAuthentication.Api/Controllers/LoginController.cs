using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using UserAuthentication.Api.Interfaces;
using UserAuthentication.Api.Models;
using UserAuthentication.Api.Services;

namespace UserAuthentication.Api.Controllers
{
    public class LoginController : ApiController
    {
        //[Route("api/User/Login")]
        //[HttpPost]
        //public IHttpActionResult LoginUser(User user)
        //{
        //    return Ok(UserService().RegisterUser(user));
        //}

        //private IUserService UserService()
        //{
        //    IUserService userService = new UserService();
        //    return userService;
        //}
    }
}
