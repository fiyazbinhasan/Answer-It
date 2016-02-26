using Newtonsoft.Json;

namespace AnswerIt.Models
{
    public class Answer
    {
        [JsonProperty("answer")]
        public string Text { get; set; }
        [JsonProperty("result")]
        public bool Result { get; set; }
    }
}
