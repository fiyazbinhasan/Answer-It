using System.Collections.Generic;
using Microsoft.AspNet.Mvc;
using Newtonsoft.Json;
using System.IO;
using Microsoft.AspNet.Hosting;
using AnswerIt.Models;

namespace AnswerIt.Controllers
{
    [Route("api/[controller]")]
    public class QasController : Controller
    {
        [HttpGet]
        public IEnumerable<Question> Get()
        {
            var virtualPath = "data/qas.json";
            var env = new HostingEnvironment();

            if (string.IsNullOrWhiteSpace(env.WebRootPath))
            {
                env.WebRootPath = Directory.GetCurrentDirectory();
            }

            var filePath = env.MapPath(virtualPath);

            var json = System.IO.File.ReadAllText(filePath);
            var qas = JsonConvert.DeserializeObject<IEnumerable<Question>>(json);

            return qas;
        }
    }
}
