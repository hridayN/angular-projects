using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using UserAuthentication.Api.Models;

namespace UserAuthentication.Api.Interfaces
{
    public interface IUserService
    {
        string RegisterUser(User user);
    }
}
