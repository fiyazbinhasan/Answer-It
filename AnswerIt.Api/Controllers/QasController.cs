using System.Text.Json;
using Microsoft.AspNetCore.Mvc;
using AnswerIt.Api.Models;

namespace AnswerIt.Api.Controllers;

[Route("api/[controller]")]
[ApiController]
public class QasController(IWebHostEnvironment env) : ControllerBase
{
    [HttpGet]
    public async Task<IEnumerable<Question>> Get()
    {
        var filePath = Path.Combine(env.ContentRootPath, "Data", "qas.json");
        await using var stream = System.IO.File.OpenRead(filePath);
        return await JsonSerializer.DeserializeAsync<IEnumerable<Question>>(stream) ?? [];
    }
}
