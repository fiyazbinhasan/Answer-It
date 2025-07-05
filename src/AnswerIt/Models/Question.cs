using Newtonsoft.Json;

namespace AnswerIt.Models
{
    public class Question
    {
        public Question()
        {
            Answers = new List<Answer>();
        }
        
        [JsonProperty("question")]
        public string Text { get; set; } = string.Empty;
        
        [JsonProperty("answers")]
        public ICollection<Answer> Answers { get; set; }
    }
}
