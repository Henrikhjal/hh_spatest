using Microsoft.AspNetCore.Mvc;

namespace server_side_rendering.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}