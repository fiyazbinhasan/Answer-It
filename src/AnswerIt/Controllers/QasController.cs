using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using AnswerIt.Models;
using AnswerIt.Extensions;

namespace AnswerIt.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class QasController : ControllerBase
    {
        private readonly IWebHostEnvironment _env;

        public QasController(IWebHostEnvironment env)
        {
            _env = env;
        }

        [HttpGet]
        public IEnumerable<Question> Get()
        {
            var virtualPath = "data/qas.json";
            var filePath = _env.MapPath(virtualPath);

            var json = System.IO.File.ReadAllText(filePath);
            var qas = JsonConvert.DeserializeObject<IEnumerable<Question>>(json);

            return qas ?? new List<Question>();
        }
    }
}
