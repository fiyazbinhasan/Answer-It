namespace AnswerIt.Extensions
{
    public static class WebHostEnvironmentExtensions
    {
        public static string MapPath(this IWebHostEnvironment env, string path)
        {
            return Path.Combine(env.WebRootPath ?? env.ContentRootPath, path);
        }
    }
}