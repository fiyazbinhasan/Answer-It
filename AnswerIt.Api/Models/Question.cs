using System.Text.Json.Serialization;

namespace AnswerIt.Api.Models;

public class Question
{
    [JsonPropertyName("question")]
    public string Text { get; set; } = string.Empty;

    [JsonPropertyName("answers")]
    public ICollection<Answer> Answers { get; set; } = [];
}
